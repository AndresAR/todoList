const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const todoRouter = require('./routes/todo')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send('Hello World!')
})

// will redirect all the non-api routes to react frontend
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

app.use('/api', todoRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))