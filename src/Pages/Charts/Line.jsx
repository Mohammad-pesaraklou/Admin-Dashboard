import React from 'react';
import LineChart from '../../Components/Charts/LineChart';
import Header from '../../Components/Header';

const Line = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Line" title="Inflation Rate" />
            <div className='w-full'>
                <LineChart />
            </div>
        </div>
    );
};

export default Line;