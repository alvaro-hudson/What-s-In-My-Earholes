import request from 'superagent'

const rootUrl = '/api/v1'

export function getAlbums() {
  return request.get(`${rootUrl}/albums`)
  .then((res) => res.body)
}

export function addAlbum(newAlbum) {
  return request.post(`${rootUrl}/albums`)
  .post(newAlbum)
  .send(newAlbum)
  .then(res => res.body)
}
