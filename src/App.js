import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import GraphAndList from './components/GraphAndList/GraphAndList';

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
    <div className="App w-4/5 mx-auto flex">
      <div className='mr-5'>
        <Countries
          countries={countries}
          addToSelection={addToSelection}
        >
        </Countries>
      </div>
      <div>
        <GraphAndList
          className='sticky top-0'
          selectedCountries={selectedCountries}
          removeFromSelection={removeFromSelection}
        >
        </GraphAndList>
      </div>
    </div>
  );
}

export default App;
