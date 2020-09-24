const path = require('path')
const express = require('express')

const authRoutes = require('./routes/auth')
const subjectsRoutes = require('./routes/subjects')
const usersRoutes = require('./routes/users')

// const pearRoutes = require('./routes/pears')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/subjects', subjectsRoutes)
server.use('/api/v1/users', usersRoutes)
// server.use('/api/v1/pears', pearRoutes)

module.exports = server
