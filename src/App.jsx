import { useState , useEffect } from "react";
import CountryCard from "./components/CountryCard";
import CountryDetail from "./components/CountryDetail";
import SearchBar from "./components/SearchBar";
import SkeletonCard from "./components/SkeletonCard";

const API = 'https://date.nager.at/api/v3/AvailableCountries';

function App(){
  const [countries , setCountries] = useState([]);
  const [query , setQuery] = useState('');
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState('');
  const [selected , setSelected] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountries(){
      try{
        setLoading(true);
        setError('');
        const res  =await fetch(API, {signal : controller.signal});
        if(!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const normalized = data.map(c => ({
          name: {common: c.name},
          region: c.countryCode,
          flags: {svg: `https://flagcdn.com/w160/${c.countryCode.toLowerCase()}.png`},
          capital: ['N/A'],
          population: 0,
          currencies: null,
          languages: null,
          area: 0,
          timezones: ['N/A'],
          subregion: '',
        }));
        setCountries(normalized);
      }
      catch(err){
        if(err.name !== 'AbortError') setError('Failed to load countries');
      }
      finally{
        setLoading(false);
      }
    }
    fetchCountries();
    return () => controller.abort();
  },[]);

  const filtered = countries.filter(c => 
    c.name.common.toLowerCase().includes(query.toLowerCase())
  );

  if(selected){
    return(
      <div className="page">
        <CountryDetail 
        country={selected} onBack={() => setSelected(null)}/>
      </div>
    );

  }

  return(
    <div className="page">
      <div className="header">
        <h1 className="title">Country Explorer</h1>
        <p className="subtitle">
          {loading ? 'Loading...' : `${filtered.length} countries`}
        </p>
      </div>

      <SearchBar
      query={query} onChange={setQuery}/>

    {error && (
      <div className="error-box">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )}

    {loading ? (
      <div className="grid">
        {Array.from({length : 20}).map((_,i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    ) : filtered.length === 0 ? (
      <div className="empty">
        <p>No countries found for "{query}"</p>
      </div>
    ) : (
      <div className="grid">
        {filtered.map((country) => (
          <CountryCard
          key = {country.name.common}
          country = {country}
          onClick = {setSelected}
          />
        ))}
      </div>
    )}

    </div>
  );
}

export default App;