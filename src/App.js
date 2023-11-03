import styles from './App.css';

function App() {
  const age = 19;
  const isGreen = true;
  return (
    
    <div className="App">
      {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1>
      {isGreen && <button>This is a Button</button>}
    </div>
  );
}


export default App;
