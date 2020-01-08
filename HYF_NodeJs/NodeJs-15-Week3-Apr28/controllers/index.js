module.exports=app=>{
    console.log('main fct')
    app.use('/api/users', require('./users/index.js').routes)
}