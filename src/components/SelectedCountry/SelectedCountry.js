import React from 'react';
import { XIcon } from '@heroicons/react/solid'

const SelectedCountry = (props) => {
    const { flags, numericCode } = props.selectedCountry;
    const removeFromSelection = props.removeFromSelection;
    return (
        <div className='flex'>
            <img className='h-10 w-10 rounded-full' src={flags.svg} alt="" />
            <XIcon
                onClick={() => { removeFromSelection(numericCode) }}
                className='h-10 text-red-500 hover:text-red-700'
            >
            </XIcon>
        </div>
    );
};

export default SelectedCountry;