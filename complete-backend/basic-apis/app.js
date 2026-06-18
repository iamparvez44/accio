import express from "express";

const app = express();
// app.use(express.json())


// app.get('/', (req, res)=>{
//   res.send("heyy jain")
// })

app.post('/', (req, res)=>{
  let num1 = +req.headers.num1
  let num2 = +req.headers.num2

  console.log(num1+num2);
})

app.listen(3000, () => {
  console.log("ap is running on 3000 port");
});
