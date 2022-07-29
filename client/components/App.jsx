import React from 'react'
import ShowAlbums from './ShowAlbums'
import { Routes, Route } from "react-router-dom"
import Home from './Home'

function App () {
  return (
    <>
      <section className="main">
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/myalbums" element={ <ShowAlbums /> }/>
        </Routes>
      </section>
    </>
  )
}

export default App
