export const RECEIVE_ALBUMS = 'RECIEVE_ALBUMS'
import { getAlbums } from "../apis/apiClient"

export function receiveAlbums(albums) {
  return {
    type: RECEIVE_ALBUMS,
    payload: albums
  }
}

export function fetchAlbums() {
  return (dispatch) => {
    return getAlbums()
      .then(res => {
        dispatch(receiveAlbums(res))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}