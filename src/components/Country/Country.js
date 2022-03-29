import React from 'react';

const Country = (props) => {
    const { name, population, flags, area, numericCode } = props.country;
    const addToSelection = props.addToSelection;
    return (
        <div className='bg-teal-100 p-3 rounded-md shadow-sm shadow-black'>
            <img className='h-40 mx-auto mb-3' src={flags.svg} alt='' />
            <h5 className='font-semibold text-xl'>{name}</h5>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <button className='bg-teal-300 rounded shadow-sm shadow-white p-2 mt-3 hover:bg-teal-500 hover:text-white' onClick={() => addToSelection(numericCode)}>Add to chart</button>
        </div>
    );
};

export default Country;