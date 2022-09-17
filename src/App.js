import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // get all data of Pokemon
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };

    fetchPokemonData();
  }, []);

  return (
    <div className="App">
      {loading ? <h1>Now Loading....</h1> : <h1>Load Completed</h1>}
    </div>
  );
}

export default App;
