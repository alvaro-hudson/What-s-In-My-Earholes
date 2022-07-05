export const RECEIVE_ALBUMS = 'RECIEVE_ALBUMS'
export const ADD_ALBUM = 'ADD_ALBUM'
import { getAlbums } from '../apis/apiClient'

export function receiveAlbums(albums) {
  return {
    type: RECEIVE_ALBUMS,
    payload: albums,
  }
}

export function addAlbum(newAlbum) {
  return {
    type: ADD_ALBUM,
    payload: newAlbum,
  }
}

export function fetchAlbums() {
  return (dispatch) => {
    return getAlbums()
      .then((res) => {
        dispatch(receiveAlbums(res))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
