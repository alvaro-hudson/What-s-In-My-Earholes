import { RECEIVE_ALBUMS, ADD_ALBUM, DEL_ALBUM } from '../actions'

// const initialAlbumState = [
//   { id: 1, album: 'I AM INITIAL STATE', artist: 'Nina Nastasia', year: '2022' },
// ]

const albumsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALBUMS:
      return payload
    case ADD_ALBUM:
      return [...state, payload]
    case DEL_ALBUM:
      return state.filter(album => album.id !== payload)  
    default:
      return state
  }
}

export default albumsReducer
