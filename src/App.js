import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [pokeList,setPokeList] = useState([]);
  // for a button call
  // const pokeCall = async () =>{
  //   try{
  //   const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
  //   console.log(res)
  //   setPokeList(res.data.results)}
  //   catch(error){console.log(error)
  // }}
  useEffect(()=>{
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((res) =>{
      console.log(res)
      setPokeList(res.data.results)
    })
    .catch((error)=>console.log(error))
  },[])
  return (
    <div className="App">
      {/* <button onClick={pokeCall}>Fetch them all!</button> */}
      <h1>Gotta Fetch them All!</h1>
      <ol>
        {
          pokeList.map((pokemon, index)=>(
            <li key={index}>{pokemon.name}</li>
          ))
        }
      </ol>
    </div>
  );
}

export default App;
