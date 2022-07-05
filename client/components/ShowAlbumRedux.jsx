import React from 'react'

import { useSelector } from 'react-redux'

function ShowAlbumsRedux() {

  const albums = useSelector(state => state.albums)

  return (
    <div>
      <h1>Redux examples:</h1>
      {albums.map(albums => {
        return ( 
          <>
        
           <h2 key={albums.id}>{albums.album}</h2>
          </>
        )
      })}
    </div>
  )

}

export default ShowAlbumsRedux