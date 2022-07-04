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
