const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const lodash=require('lodash');
const port=3000;
const users=[
    {name:'John Doe', email:'john@hyf.com'},
    {name:'Jane Doe', email:'jane@hyf.com'}
]

app.use(bodyParser.json());

app.get('/users', (req,res)=>{
    res.send(users)
})
app.post('/users', (req,res)=>{
    users.push(req.body);
    res.send(users)
})
const updateUser=(email, data)=>{
    const index=users.findIndex(users => users.email===email);
    users[index].name=data.name;
    users[index].email=data.email;
    return users;
}
app.put('/users/:email', (req,res)=>{
    const users=updateUser(req.params.email, req.body);
    res.send(users)
})
app.delete('/users/:email', (req,res)=>{
    lodash.remove(users, user=>{
        return user.email===req.params.email;
    })
    res.send(users);
})

app.listen(port, 
    ()=>console.log(`Example app listening on port ${port}!`)
)
