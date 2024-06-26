const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const db = require('./config/db')
const route = require('./routes')
const app = express()
const port = 3000

//Connect db
db.connect()

app.use(morgan('combined'))

app.use(express.urlencoded({
    extended: true
  }))
app.use(express.json())

app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })