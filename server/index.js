const express = require('express')
let cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.post("/submit", (req, res) => {
    let data = req.body
    console.log(data);
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})