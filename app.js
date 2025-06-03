const express = require('express')
const app = express()
const PORT = 8000
app.set('json spaces', 4);

app.listen(PORT, ()=> {
    const msg = `Hello API running on PORT ${PORT}`
    const link = `http://localhost:${PORT}`
    const conf = `\x1b[1m${link}\x1b[0m`
    console.log(msg + '\n' + conf)
})

app.get('/v1/hi', function(req, res) {
    const out = {
        msg: "Hello, world!"
    }
    res.json(out)
})

app.get('/v1/hi/user/:name', function(req, res) {
    const out = {
        msg: "Hello, " + req.params.name.toUpperCase()
    }
    res.json(out)
})

app.get('*', function(req, res) {
    const err = {
        error: 'Invalid endpoint'
    }
    res.json(err)
})