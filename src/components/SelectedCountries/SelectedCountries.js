import React from 'react';
import SelectedCountry from '../SelectedCountry/SelectedCountry';

const SelectedCountries = (props) => {
    const selectedCountries = props.selectedCountries;
    return (
        <div className='bg-teal-100 rounded-md p-3 mt-5 shadow-sm shadow-black'>
            <h3 className='text-3xl font-semi-bold mb-3'>Selected Countries</h3>
            <div className='grid grid-cols-5 gap-3'>
                {
                    selectedCountries.map(selectedCountry => <SelectedCountry selectedCountry={selectedCountry}></SelectedCountry>)
                }
            </div>
        </div>
    );
};

export default SelectedCountries;