// imports
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

// app
const app = express()

// db

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Database Connected."))
.catch((err) => console.log(err));


// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }))

// routes
const testRoutes = require('./src/api/routes/test')
app.use('/', testRoutes)

// port
const port = process.env.PORT || 3000;

// listners
const server = app.listen(port , () => console.log(`server running on port http://localhost:${port}`))