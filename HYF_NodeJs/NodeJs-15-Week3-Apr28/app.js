const express=require('express')
const bodyParser=require('body-parser')
const app=express()

//setup default middlewares

app.use(function (req, res, next) {
    console.log('test:', req.body)
    next()
  })

app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({}))

app.use(function (req, res, next) {
    console.log('tes1:')

  })


  app.use(function (req, res, next) {
    console.log('Time 2:')
    next()
  })

//controllers
require('./controllers')(app)

module.exports=app