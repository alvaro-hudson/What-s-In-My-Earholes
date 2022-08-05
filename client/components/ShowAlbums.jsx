import React, { useEffect } from 'react'
import { fetchAlbums } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import AlbumCard from './AlbumCard'


function ShowAlbums() {

const dispatch = useDispatch()

// const [options, showOptions] = useState(false)

  useEffect(() => {
    return dispatch(fetchAlbums())
  },[])

  const albums = useSelector(state => state.albums)

  // const handleClick = () => {
  //   showOptions(state => !state)
  // }

  return (
    <>
      <Header/>
      <div className='show-albums'>
        {albums.map(data => {
          return (
            <AlbumCard key={data.id} data={data}/>
        )})}
        <Link to="/addalbum"><button>Add a new album</button></Link>
      </div>
    </>
   
  )
}

export default ShowAlbums