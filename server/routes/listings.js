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

router.post('/checkinterest', (req, res) => {
  const interest = req.body
  db.checkInterest(interest)
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

router.get('/mylist/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMyList(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteListing(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/statuszero/:id', (req, res) => {
  const id = Number(req.params.id)
  db.changeStatusToZero(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/statusone/:id', (req, res) => {
  const id = Number(req.params.id)
  db.changeStatusToOne(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/statustwo/:id', (req, res) => {
  const id = Number(req.params.id)
  db.changeStatusToTwo(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/statusthree/:id', (req, res) => {
  const id = Number(req.params.id)
  db.changeStatusToThree(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/mypearings/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMyPearings(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/mypearingsbyothers/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMyPearingsByOthers(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/completedpearings/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMyCompleted(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/completedpearingsbyothers/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMyCompletedByOthers(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/addpear', (req, res) => {
  const pearId = req.body.pearId
  const id = req.body.id
  db.addPear(pearId, id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/myinterests/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMyInterests(id)
    .then(listing => {
      return res.json(listing)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
