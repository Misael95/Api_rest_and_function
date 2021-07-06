const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {

  res.send('Hello World!').status(204);

})

app.post('/', (req, res) => {
    console.log(req.body)
   var num1=req.body?.num1;
   var num2=req.body?.num2;
   console.log(num1 && num2)
   if(num1 && num2) {
    res.json({
        suma: num1+num2,
        resta: num1-num2,
        multiplicacion: num1*num2, 
        division: num1/num2
    }).status(200);
   }else{
    res.send('No son numericos').status(400);  
   }
  
  })

  app.put('/', (req, res) => {
   console.log(req.body)
   var param1=req.body?.param1;
   var param2=req.body?.param2;
   console.log(param1 && param2)
   if(param1 && param2) {
    res.json({
        concatencion: param1+ ' ' +param2,
    }).status(200);
   }else{
    res.send('No son strings').status(400);  
   }
  
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
