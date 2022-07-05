import { RECEIVE_ALBUMS } from '../actions'

const initialAlbumState = [
  { id: 1, album: 'I AM INITIAL STATE', artist: 'Nina Nastasia', year: '2022' },
]

const albumsReducer = (state = initialAlbumState, action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALBUMS:
      return payload
    default:
      return state
  }
}

export default albumsReducer
