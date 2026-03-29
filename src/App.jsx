
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const fetchData = async () => {
    if(cache[input]){
      setResults(cache[input]);
      return;
    }
    const data = await fetch('https://dummyjson.com/recipes/search?q=' + input)
    const json = await data.json();

    setResults(json?.recipes);
    setCache(prev => ({...prev, [input]: json?.recipes}))

  }
  useEffect(() => {
    const timer  = setTimeout(fetchData, 500);
    return () => {
      console.log('clearing timer')
  clearTimeout(timer);
    } 
  
  }, [input])

  return (<div className="App">
    <div className="container">
      <div className="left">
        <h1>Auto complete search</h1>
        <input name='searchInput' type='text'
          className='search-input' value={input} onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        {showResults && <div className='results-container'>
          {results.length ? results.map((r) => <span className='result' key={r.id}>{r.name}</span>) : <span className='result' >{"No results"}</span> }
        </div>}
      </div>

    </div>
  </div>)
}

export default App
