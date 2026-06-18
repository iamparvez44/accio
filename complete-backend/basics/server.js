
const express = require('express');

let app = express();


app.get('/', (req, res)=>{
  res.send("this is my first backend code")
})

app.listen(3000, ()=>{
  console.log("server is running on port 3000");
})

































// let express = require('express');
// let app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });