import express, { json } from 'express'
import usersRoutes from './routes/Users.routes.js'

const app = express()

app.use(json())
app.use(usersRoutes)

app.listen(3333, () => console.log('Server listening on port 3333'))