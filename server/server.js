const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')

// serve up public assets 
app.use(express.static(publicPath)) 

// if what is requested isn't in public folder, go to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(3000, () => {
    console.log('server is up')
})