import { RECEIVE_ALBUMS, ADD_ALBUM } from '../actions'
import { addNewAlbum } from '../apis/apiClient'

// const initialAlbumState = [
//   { id: 1, album: 'I AM INITIAL STATE', artist: 'Nina Nastasia', year: '2022' },
// ]

const albumsReducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALBUMS:
      return payload
    case ADD_ALBUM:
      addNewAlbum(payload)
      return [...state, payload]
    default:
      return state
  }
}

export default albumsReducer
