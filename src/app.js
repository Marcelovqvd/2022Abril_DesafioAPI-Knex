const express = require('express')
const usersRoutes = require('./routes/Users.routes.js')

const app = express()

app.use(express.json())
app.use(usersRoutes)

// notFound
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

// catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message})
})


app.listen(3333, () => console.log('Server listening on port 3333'))