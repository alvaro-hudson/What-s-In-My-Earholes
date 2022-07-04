import React, { useState, useEffect } from 'react'

import { getAlbums } from '../apis/apiClient'

export default function ShowAlbums() {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    return getAlbums()
      .then(list => {
      console.log(list)
      setAlbums(list)
      
    })
  }, [])

  return (

    <div className='show-albums'>
      
      {albums && albums.map(album => {
        return <h1 key={album.id}>{album.album}</h1>
      })}

    </div>
  )

}