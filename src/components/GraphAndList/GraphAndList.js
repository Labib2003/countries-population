import React from 'react';
import Graph from '../Graph/Graph';
import SelectedCountries from '../SelectedCountries/SelectedCountries';

const GraphAndList = (props) => {
    const removeFromSelection = props.removeFromSelection;
    const selectedCountries = props.selectedCountries;
    return (
        <div className='sticky top-0'>
            <SelectedCountries
                removeFromSelection={removeFromSelection}
                selectedCountries={selectedCountries}
            >
            </SelectedCountries>
            <br />
            <Graph
                selectedCountries={selectedCountries}
            >
            </Graph>
        </div>
    );
};

export default GraphAndList;