
const app = require('./src/app');

app.get("/notes", (req, res)=>{
  res.send("this data is comming frome node backend");
})


app.listen(3000, ()=>{
  console.log("server is running on port 3000");
})