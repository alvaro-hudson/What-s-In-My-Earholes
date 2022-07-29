import React from 'react'
import ShowAlbums from './ShowAlbums'
import { Routes, Route } from "react-router-dom"

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        {/* <ShowAlbumsRedux/> */}
      </section>
      <Routes>
        {/* <Route path="/" element={ <Home /> }/> */}
        <Route path="/myalbums" element={ <ShowAlbums /> }/>
        
      </Routes>
    </>
  )
}

export default App
