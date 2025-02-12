const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello, Express!')
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})