const express = require('express')

const db = require('../db/users')

const router = express.Router()

router.post('/', (req, res) => {
  const update = req.body
  db.updatePersonalInfoById(update)
    .then(user => {
      return res.json({ user })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUserById(id)
    .then(user => {
      console.log(user)
      return res.json({ user })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
