import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
// fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) =>{
//   console.log(data)
// });

// fetch data from url, then using the promise to convert it to json, 
// then use the coverted json "data"

function App() {
  const [catFact, setCatFact] = useState("");
  const fetchCatFact = () =>{
    Axios.get("https://catfact.ninja/fact").then((res) =>{
      setCatFact(res.data.fact)
    })
  }
  useEffect (() =>{
    fetchCatFact();
  }, []);
  //这里要用 useEffect 只用mount 一次
  
  return (
    <div className="App">
      <button onClick ={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;