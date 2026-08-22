import express, { json } from 'express'
import { v4 as uuidv4 } from 'uuid';

let app = express();

app.use(express.json());

// this is post api to get the data from frount-end

let notesArr = [];

app.post('/notes', (req, res)=>{

  let {title, description} = req.body;

  if(!title || !description){
    return res.json({"message": "Title and description are required"})
  }

  let newNote = {
    "id": uuidv4(),
    "title": title,
    "description": description
  }

  notesArr.push(newNote);

  res.json({
    "message": "new note added successfully",
    "data": notesArr
  })

})


// GET /notes (saare notes lana)

app.get('/notes', (req, res)=>{

  if(notesArr.length ===0){
    return res.json({
      message: "no data available",
      data: []
    })
  }

  res.json({
    message: "data fetch succecfully",
    data: notesArr
  })

})

//✅ GET /notes/:id → Get single note

app.get('/notes/:id', (req, res)=>{
 const id = req.params.id

 const note = notesArr.find((item) => item.id==id);

 if(!note){
  return res.json({
    message:"note not found"
  })
 }

 res.json({
  message: "note fetched succefully",
  data: note
 })

})




app.listen(3000, ()=>{

  console.log("backend is running on 3000 port in your local machine");
})