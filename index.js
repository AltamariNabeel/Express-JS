const express=require('express');
const app=express()

//app.use((req,res)=>{
  //  console.log('We got a Request New')
 //   res.send('<h1>hello</h1>')
//})

app.get('/', (req,res)=>{
    res.send('this is the home page')
})

app.get('/cat', (req,res)=>{

    res.send('Mewo')
})

app.get('/dog',(req,res)=>{
    res.send('Woooff')
})
app.get('*',(req,res)=>{
    res.send('I don`t know that path')
})

app.listen(3000,() =>{
    console.log('listen on port 3000!')
})