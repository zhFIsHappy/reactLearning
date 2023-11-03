import './App.css';

function App() {
  
  return (
    
    <div className="App">
      <Job salary = {9000} position = "sss" company = "amazon"/>
      <Job salary = {12000} position = "sad" company = "Mcsft"/>
      <Job salary = {20000} position = "ssfadas" company = "Google"/>
    </div>
  );
}

const getName = () =>{
  return "Frank"
}

const Job = (props) =>{
  return (
    <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
  </div>
  )
}
export default App;
