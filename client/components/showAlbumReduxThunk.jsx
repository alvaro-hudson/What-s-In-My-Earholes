import React, { useEffect } from 'react'
import { fetchAlbums } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'


function ShowAlbumsReduxThunk() {

const dispatch = useDispatch()

  useEffect(() => {
    return dispatch(fetchAlbums())
  },[])

  const albums = useSelector(state => state.albums)
  console.log(albums)

  return (
    <div>
      <h1>Redux Thunk Album List</h1>
      {albums.map(albums => {
        return <h2 key={albums.id}>{albums.album}</h2>
      })}
    </div>
  )
}

export default ShowAlbumsReduxThunk