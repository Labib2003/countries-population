import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])
  return (
    <div className="App">
      <Countries countries={countries}></Countries>
    </div>
  );
}

export default App;
