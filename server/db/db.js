const connection = require('./connection')

function getAlbums(db = connection) {
  return db('albums')
}

module.exports = {
  getAlbums
}