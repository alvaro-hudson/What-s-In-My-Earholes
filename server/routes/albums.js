const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getAlbums()
    .then((album) => {
      res.json(album)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const newAlbum = req.body
  db.addAlbum(newAlbum)
    .then((idArr) => {
      const id = idArr[0]
      // eslint-disable-next-line promise/no-nesting
      db.getOneAlbum(id)
        .then((album) => {
          res.json(album)
        })
        .catch((err) => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
