import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Graph = (props) => {
    const selectedCountries = props.selectedCountries;
    return (
        <div>
            <BarChart width={500} height={500} data={selectedCountries}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='population' barSize={100} fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Graph;