import React from 'react';

const Country = (props) => {
    const {name, population, flags, area} = props.country;
    return (
        <div className='bg-teal-100 m-3 p-3 rounded-md shadow-sm shadow-black'>
            <img className='h-40 mx-auto mb-5' src={flags.svg} alt='' />
            <h5 className='font-semibold'>{name}</h5>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;