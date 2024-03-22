const express = require('express')
const app = express()
const port = 80
let healthy = false;

setInterval(() => {
    healthy = !healthy
    console.log(`App is ${healthy ? 'healthy' : 'unhealthy'} now`)
}, 5000)

app.get('/', (req, res) => {
    res.status(200).send('App is healthy!')
})

app.get('/hc', (req, res) => {
    res.status(healthy ? 204 : 503).send()
})

app.listen(port, () => console.log(`App listening on port ${port}`))