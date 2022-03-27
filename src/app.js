import express from 'express'
import cors from 'cors';

import { usersRoutes } from './routes/Users.routes.js'

const app = express()

app.use(() => express.cors)
app.use(() => express.json())
app.use(usersRoutes)

app.listen(3333, () => console.log('Server listening on port 3333'))