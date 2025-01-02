import { useState } from 'react'
import './App.css'
// import Banner from './components/Banner'
// import Row from './components/Row'
// import requests from './api/request'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import DetailPage from './pages/DetailPage'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<MainPage />}/>
          <Route path=":movieId" element = {<DetailPage />}/>
          <Route path="search" element = {<SearchPage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
