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
      return res.json({ user })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

// router.get('/interested/:id', (req, res) => {
//   const id = Number(req.params.id)
//   db.getInterestedList(id)
//     .then(listing => {
//       // const users = []
//       return res.json(listing.map(user => {
//         // console.log(user.user_id)
//         db.getUserById(user.user_id)
//           .then(res => {
//             console.log(res)
//             return res
//           })
//       }))
//       // return users
//     })
//     .catch(err => {
//       res.status(500).json({ error: err.message })
//     })
// })

router.get('/interested/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getInterestedList(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
