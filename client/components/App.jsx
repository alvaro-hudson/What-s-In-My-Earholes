import React from 'react'
import ShowAlbums from './ShowAlbums'

function App () {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <ShowAlbums />
      </section>
    </>
  )
}

export default App
