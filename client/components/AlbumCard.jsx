import React, { useState } from 'react'
import DeleteAlbum from './DeleteAlbum'
import UpdateAlbum from './UpdateAlbum'


function AlbumCard({ data }) {

  const [options, showOptions] = useState(false)

  const handleClick = () => {
    showOptions(state => !state)
  }

  return (
    <>
    <div id={data.id} key={data.id} className='album-card' onClick={handleClick}>
      <h2>Album: {data.album}</h2>
      <ul key={data.id}>
      <li>Artist: {data.artist}</li>
      <li>Year: {data.year}</li>
      </ul>
      <p>↓</p>
    </div>
     {options && <DeleteAlbum id={data.id}/>}
     {options && <UpdateAlbum data={data}/>}
     </>
  )
}

export default AlbumCard