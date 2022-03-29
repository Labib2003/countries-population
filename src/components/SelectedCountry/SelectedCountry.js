import React from 'react';
import { XIcon } from '@heroicons/react/solid'

const SelectedCountry = (props) => {
    const { flags, name, numericCode } = props.selectedCountry;
    const removeFromSelection = props.removeFromSelection;
    return (
        <div className='flex'>
            <img className='h-8 w-8 rounded-full' src={flags.svg} alt="" />
            <p className='mx-3'>{name}</p>
            <XIcon
                onClick={() => { removeFromSelection(numericCode) }}
                className='h-7 text-red-500 hover:text-red-700'
            >
            </XIcon>
        </div>
    );
};

export default SelectedCountry;