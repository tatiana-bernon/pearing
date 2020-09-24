const express = require('express')

const db = require('../db/listings')

const router = express.Router()

// router.get('/:id', (req, res) => {
//   const id = Number(req.params.id)
//   db.getUserGarden(id)
//     .then(singleGarden => {
//       return res.json(singleGarden)
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message })
//     })
// })

router.get('/', (req, res) => {
  db.getList()
    .then(list => {
      return res.json({ list })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
