// imports
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

// app
const app = express()

// db

// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }))

// port
const port = 3000

// listners
const server = app.listen(port , () => console.log(`server running on port http://localhost:${port}`))