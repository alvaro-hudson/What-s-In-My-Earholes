import React, { useEffect } from 'react'
import { fetchAlbums } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import DeleteAlbum from './DeleteAlbum'


function ShowAlbumsReduxThunk() {

const dispatch = useDispatch()

  useEffect(() => {
    return dispatch(fetchAlbums())
  },[])

  const albums = useSelector(state => state.albums)

  return (
    <div className='show-albums redux-thunk'>
      <h1>Redux Thunk Album List</h1>
      {albums.map(album => {
        return (
        <>
          <h2>Album: {album.album}</h2>
          <ul key={album.id}>
            <li>Artist: {album.artist}</li>
            <li>Year: {album.year}</li>
            <DeleteAlbum id={album.id}/>
          </ul>
        </>
      )})}
    </div>
  )
}

export default ShowAlbumsReduxThunk