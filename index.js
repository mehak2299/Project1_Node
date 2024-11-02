const express=require('express');
const app=express();
const PORT=9000;
const posts=require('./Data/data1.json')
app.get('/api/posts',(req,res)=>{
    return res.json(posts)
});

app.get('/api/posts/:id',(req,res)=>{
    console.log("HI")
    const id=Number(req.params.id);
   
    const post=posts.find((item)=>item.id===id)
    console.log(post)
    return res.json(post)
})
app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`)
});

