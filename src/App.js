import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Graph from './components/Graph/Graph';
import SelectedCountries from './components/SelectedCountries/SelectedCountries';

function App() {
  //loading country data from api
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])

  //user selected contries
  const [selectedCountries, setSelectedCountries] = useState([]);

  const addToSelection = (numericCode) => {
    const exists = selectedCountries.find(selectedCountry => selectedCountry.numericCode === numericCode);
    if (exists) {
      alert('Cant add duplicates');
      return;
    }
    if (selectedCountries.length > 9) {
      alert('cant add more than 10');
      return;
    }
    else {
      const newSelectedCountry = countries.find(countrie => countrie.numericCode === numericCode);
      const newSelectedCountries = [...selectedCountries, newSelectedCountry];
      setSelectedCountries(newSelectedCountries);
    }
  }
  const removeFromSelection = (numericCode) => {
    const remainingSelection = selectedCountries.filter(selectedCountry => selectedCountry.numericCode !== numericCode);
    setSelectedCountries(remainingSelection);
  }

  return (
    <div className="App w-4/5 mx-auto">
      <SelectedCountries 
        selectedCountries={selectedCountries}
        removeFromSelection={removeFromSelection}
      >
      </SelectedCountries>
      <br />
      <Graph 
        selectedCountries={selectedCountries}
      >
      </Graph>
      <Countries
        countries={countries}
        addToSelection={addToSelection}
      >
      </Countries>
    </div>
  );
}

export default App;
