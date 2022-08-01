import React from 'react'
import ShowAlbums from './ShowAlbums'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import AddAlbum from './AddAlbum'

function App () {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/myalbums" element={ <ShowAlbums /> }/>
          <Route path="addalbum" element= { <AddAlbum/> } />
        </Routes>
      </div>
    </>
  )
}

export default App
