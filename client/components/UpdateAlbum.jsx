import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAlbums } from '../actions/index'

function UpdateAlbum({ id }) {
  const dispatch = useDispatch()
  const albums = useSelector(state => state.albums)
  const state = albums[id - 1]

  const [button, showButton] = useState(null)
  const [details, updateDetails] = useState(state)

  console.log(details)

  const firstClick = () => {
    showButton(true)
  }

  const changeHandler = (e) => {
    updateDetails({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(updateAlbums(id, details))
  }


  return (
    <>
      <button onClick={firstClick}>Update Album</button>
      <div>
      {button &&  <form>
          <label htmlFor="album">Album Name: </label>
          <input type="text" id="album" name="album" onChange={changeHandler}/>
          <label htmlFor="artist">Artist Name: </label>
          <input type="text" id="artist" name="artist" onChange={changeHandler}/>
          <label htmlFor="year">Year Released: </label>
          <input type="text" id="year" name="year" onChange={changeHandler}/>
          <button onClick={handleClick}>Update</button>
        </form> }
      </div>
    </>
  )
}

export default UpdateAlbum