import styles from './App.css';

function App() {

  const planets = [
    {name : "Mars", isGasPlanet : false},
    {name : "Earth", isGasPlanet : false},
    {name : "Jupiter", isGasPlanet : true},
    {name : "Venus", isGasPlanet : false},   
  ]
  return (
    
    <div className="App">
       {/* 这里使用 planet 这个variable 访问map的 */}
       {/* 两种方式 */}
      {planets.map((planet, key) =>{
        // if(planet.isGasPlanet)return <h1 key = {key}> {planet.name}</h1>;
        return <h1 key = {key}> {planet.isGasPlanet ? planet.name : ""}</h1>;
      })}
    </div>
  );
}


export default App;
