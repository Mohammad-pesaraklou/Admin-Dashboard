import React from 'react';
// component
import Header from '../../Components/Header';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
// data
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
// context
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {

    const { currentMode } = useStateContext();

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Area" title="USA CLIMATE - WEATHER BY MONTH" />
            <div className='w-full'>
                <ChartComponent
                    id='charts'
                    primaryXAxis={ColorMappingPrimaryXAxis}
                    primaryYAxis={ColorMappingPrimaryYAxis}
                    legendSettings={{ mode: 'Range', background: 'white' }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                >
                    <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={colorMappingData[0]}
                            name="USA"
                            xName="x"
                            yName="y"
                            type="Column"
                            cornerRadius={{
                                topLeft: 10,
                                topRight: 10,
                            }}
                        />
                    </SeriesCollectionDirective>
                    <RangeColorSettingsDirective>
                        {
                            colorMappingData.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)

                        }
                    </RangeColorSettingsDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default ColorMapping;