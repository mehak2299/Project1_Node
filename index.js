const express = require('express');
const app = express();
const PORT = 9000;
const fs=require('fs')
const posts = require('./Data/data1.json')
app.use(express.urlencoded({extended:false}))
app.get('/api/posts', (req, res) => {
    return res.json(posts)
});

app.get('/api/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find((item) => item.id === id)
    return res.json(post)
})
app.post('/api/posts', (req, res) => {
    const body=req.body
    console.log("Body124",body)
    const data={
        userId:body.userId,
        id:posts.length+1,
        title:body.title,
        body:body.body
    }
    posts.push(data);
    // console.log(posts)

    fs.writeFile('./Data/data1.json',JSON.stringify(posts),(err)=>{
        if(err){
            console.log(err)
            res.status(400).send("Not able to add data")
        }
        else{
            return res.json({ status: 'success',id:posts.length } )
        }
    })

})
app.patch('/api/posts/:id', (req, res) => {
    return res.json({ status: 'Patch' })
})
app.delete('/api/posts/:id', (req, res) => {
    return res.json({ status: 'delete' })
})
app.listen(PORT, () => {
    console.log(`Server started ${PORT}`)
});

