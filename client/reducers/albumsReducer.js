const initialAlbumState = [{id: 1, album: 'Riderless Horse', artist: 'Nina Nastasia', year: '2022'}]

const albumsReducer = (state = initialAlbumState, action) => {
  const { type, payload } = action
  return state
  }


export default albumsReducer