import React from 'react'
import ShowAlbums from './ShowAlbums'
import ShowAlbumsRedux from './ShowAlbumRedux'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <ShowAlbums />
        <ShowAlbumsRedux/>
      </section>
    </>
  )
}

export default App
