const connection = require('./connection')

function getAlbums(db = connection) {
  return db('albums')
}

function addAlbum(newAlbum, db = connection) {
  return db('albums').insert(newAlbum)
}

function getOneAlbum(id, db = connection) {
  return db('albums')
    .select()
    .where('id', id)
    .first()
}

function deleteAlbum(id, db = connection) {
  return db('albums')
    .del()
    .where('id', id)
}

module.exports = {
  getAlbums,
  addAlbum,
  getOneAlbum,
  deleteAlbum
}