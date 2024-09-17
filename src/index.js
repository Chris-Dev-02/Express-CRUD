import { app } from './server.js'
import { connection } from "./database.js"
import { PORT } from './config.js'

connection();

app.listen(PORT, () => {
    console.log('Server on port 3000')
})