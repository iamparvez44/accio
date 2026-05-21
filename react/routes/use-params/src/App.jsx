import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import User from "./components/User";






let App = ()=>{


  return(
    <>

      <Routes>
      <Route path="/User/:id" element={<User></User>} />

      </Routes>


    </>
  )
}

export default App;