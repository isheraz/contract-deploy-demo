const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
  res.send("{message: 'Hello World!'}")
})
app.get('/understand-object', (req, res) => {
    console.table(req.query);
    const reply = {message: [{id: '1'}, {id: 2}, {id: 3}], class: "blockchain-js-101", test: {
        message: "Message of Test. Accessable by obj.test.message",
        request: req.headers
    }}
    res.json(reply);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})