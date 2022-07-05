import request from 'superagent'

const rootUrl = '/api/v1'

export function getAlbums() {
  return request.get(`${rootUrl}/albums`)
  .then((res) => res.body)
}

export function addNewAlbum(newAlbum) {
  return request.post(`${rootUrl}/albums`)
  .send(newAlbum)
  .then(res => res.body)
}

export function deleteAlbum(id) {
  return request.del(`${rootUrl}/${id}`)
  .then(res => res)
}
