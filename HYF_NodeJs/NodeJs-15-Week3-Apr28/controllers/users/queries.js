const {users}=require('../../models/user')

const getUsers=()=> {
    return users;
}
const updateUser=(id,data)=> {
    const index = users.findIndex(user => user.id === id)

    users[index].name = data.name;
    users[index].email = data.email;

    return users;
    
}
const newUser=(data)=>{
    const user={
        id: data.id,
        name: data.name,
        email: data.email
    }
    users.push(user)
    return users
}
const deleteUser=(id)=>{
    const index = users.findIndex(user => user.id === id)
    users.splice(index)
    return users
}
module.exports={getUsers, updateUser, newUser,deleteUser}