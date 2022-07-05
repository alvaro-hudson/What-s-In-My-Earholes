import React, { useState, useEffect } from 'react'

import { getAlbums } from '../apis/apiClient'

export default function ShowAlbums() {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    return getAlbums()
      .then(list => {
      setAlbums(list)
      
    })
  }, [])

  return (

    <div className='show-albums'>
      <h1>React examples</h1>
      {albums && albums.map(albums => {
        return (
          <>
            <h2 key={albums.id}>{albums.album}</h2>
          </>
        )
      })}

    </div>
  )

}