import 'dotenv/config'
import express from 'express'
import movieRoute from './router/route.js'

const app = express()
const port = process.env.PORT || 4001

app.use(express.json())
app.use('/movies', movieRoute)

app.listen(port, ()=>{
    console.log(`Sever Connection On ${port}`);
})