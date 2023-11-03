import './App.css';

function App() {
  const name = <h1>Frank</h1>;
  const age = <h2>23</h2>
  const email= <h2>zhfan13413@gamil.com</h2>
  return (
    
    <div className="App">
      <User name = "Frank" age = {21} email = "zhfan@jdja.com" />
      <User name = "Jake" age = {29} email = "jake@jdja.com"/>
    </div>
  );
}

const getName = () =>{
  return "Frank"
}

const User =(props) =>{
  return (
  <div>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
    </div>
    )
}
export default App;
