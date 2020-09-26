const express = require('express')

const db = require('../db/listings')

const router = express.Router()

router.get('/', (req, res) => {
  db.getList()
    .then(list => {
      return res.json({ list })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getListingById(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/show', (req, res) => {
  const interest = req.body
  db.showInterest(interest)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/remove', (req, res) => {
  const interest = req.body
  db.removeInterest(interest)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/interest/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getInterestById(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  const newListing = req.body
  db.addNewListing(newListing)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
