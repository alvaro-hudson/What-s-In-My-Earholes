import React from 'react'
import ShowAlbums from './ShowAlbums'
import ShowAlbumsRedux from './ShowAlbumRedux'
import ShowAlbumsReduxThunk from './showAlbumReduxThunk'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <ShowAlbums />
        <ShowAlbumsRedux/>
        <ShowAlbumsReduxThunk />
      </section>
    </>
  )
}

export default App
