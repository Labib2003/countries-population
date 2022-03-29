import React from 'react';
import Country from '../Country/Country';

const Countries = (props) => {
    const countries = props.countries;
    const addToSelection = props.addToSelection;
    return (
        <div>
            <h3 className='text-5xl font-semi-bold my-3'>All countries</h3>
            <div className='grid grid-cols-3 gap-3'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.numericCode}
                        addToSelection={addToSelection}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;