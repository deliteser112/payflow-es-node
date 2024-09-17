const express = require('express')
const dotenv = require('dotenv')
const InMemoryUserRepository = require('./in-memory-user.repository')

dotenv.config()

const app = express()

const userRepository = new InMemoryUserRepository()

const getUsersRoute = require('../routes/getUsers')(userRepository)
const syncUsersRoute = require('../routes/syncUsers')(userRepository)

app.get('/users', getUsersRoute)
app.get('/users/sync', syncUsersRoute)

exports.server = app;
