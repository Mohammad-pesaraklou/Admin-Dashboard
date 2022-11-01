import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
// data
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
// Context
import { useStateContext } from '../../contexts/ContextProvider';
// component
import Header from '../../Components/Header';


const Bar = () => {

    const { currentMode } = useStateContext();

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Area" title="Olympic Medal Counts - RIO" />
            <div className='w-full'>
                <ChartComponent
                    id='charts'
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                    legendSettings={{ background: 'white' }}

                >
                    <Inject services={[Legend, ColumnSeries, Category, Tooltip, DataLabel]} />
                    <SeriesCollectionDirective>
                        {
                            barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
                        }
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Bar;