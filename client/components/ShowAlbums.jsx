import React, { useState, useEffect } from 'react'
import { fetchAlbums } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import DeleteAlbum from './DeleteAlbum'
import UpdateAlbum from './UpdateAlbum'
import Header from './Header'


function ShowAlbums() {

const dispatch = useDispatch()

const [options, showOptions] = useState(false)

  useEffect(() => {
    return dispatch(fetchAlbums())
  },[])

  const albums = useSelector(state => state.albums)

  const handleMouseEnter = () => {
    showOptions(true)
  }

  const handleMouseLeave = () => {
    showOptions(false)
  }

  return (
    <>
      <Header/>
      <div className='show-albums'>
        {albums.map(data => {
          return (
            <div key={data.id} className='album-info' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <h2>Album: {data.album}</h2>
              <ul key={data.id}>
              <li>Artist: {data.artist}</li>
              <li>Year: {data.year}</li>
              </ul>
              {options && <DeleteAlbum id={data.id}/>}
              {options && <UpdateAlbum data={data}/>}
            </div>
        )})}
        <Link to="/addalbum"><button>Add a new album</button></Link>
      </div>
    </>
   
  )
}

export default ShowAlbums