import React from 'react';

const SelectedCountry = (props) => {
    const {flags, name} = props.selectedCountry;
    return (
        <div className='flex'>
            <img className='h-10 w-10 rounded-full mr-3' src={flags.svg} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default SelectedCountry;