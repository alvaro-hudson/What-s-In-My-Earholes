import React from 'react'


function AlbumCard({ handleClick, albums}) {


  return (
    <div className='show-albums'>
        {albums.map(data => {
          return (
            <div id={data.id} key={data.id} className='album-info' onClick={handleClick}>
              <h2>Album: {data.album}</h2>
              <ul key={data.id}>
              <li>Artist: {data.artist}</li>
              <li>Year: {data.year}</li>
              </ul>
            </div>
        )})}
    </div>
  )
}

export default AlbumCard