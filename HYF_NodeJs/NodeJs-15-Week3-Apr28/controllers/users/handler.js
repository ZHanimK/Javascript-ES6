const {getUsers,updateUser, newUser,deleteUser}=require('./queries')

const getList=(req, res) =>{
    console.log('list')
    const users=getUsers()
    res.json({
        data:users
    })
}
const updateItem=(req, res) =>{
    const users=updateUser(req.params.id, req.body)
    res.json({
        data:users
    })
}
const createItem=(req, res)=>{
    const users=newUser(req.body)
    res.json({
        data:users
    })
}
const delItem=(req, res)=>{
    const users=deleteUser(req.params.id)
    res.json({
        data:users
    })
}
module.exports={getList, updateItem, createItem,delItem}

