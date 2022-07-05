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

module.exports = {
  getAlbums,
  addAlbum,
  getOneAlbum
}