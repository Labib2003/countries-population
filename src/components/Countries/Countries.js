import React from 'react';
import Country from '../Country/Country';

const Countries = (props) => {
    const countries = props.countries;
    return (
        <div className='grid grid-cols-3'>
            {
                countries.map(country => <Country 
                    country={country} 
                    key={country.numericCode}
                    ></Country>)
            }
        </div>
    );
};

export default Countries;