import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null)
  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => { setPredictedAge(res.data.age)})
  }
  return (
    <div className="App">
      <input placeholder="input your name" onChange = {(event) =>{setName(event.target.value)}}></input>
      <button onClick={fetchData}>Predict Age</button>
      <h1>predict your age: {predictedAge?.age} </h1>
    </div>
  );
}

export default App;