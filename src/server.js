import express from 'express'
import { router } from './routes/routes.js'

export const app = express()

//Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World')
})