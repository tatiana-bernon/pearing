const express = require('express')

const db = require('../db/subjects')

const router = express.Router()

router.get('/', (req, res) => {
  db.getSubjects()
    .then(subjects => {
      return res.json({ subjects })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
