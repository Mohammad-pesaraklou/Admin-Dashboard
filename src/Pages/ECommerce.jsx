import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import myBg from '../data/myBg.jpg'
// components
import Navbar from '../Components/Navbar';
import Stacked from './Charts/Stacked';
import LineChart from '../Components/Charts/LineChart';
import SparkLine from './Charts/SparkLine';
// icons
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
// data
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {
    earningData,
    medicalproBranding,
    recentTransactions,
    weeklyStats,
    dropdownData,
    SparklineAreaData,
    ecomPieChartData
} from '../data/dummy';
// contexts
import { useStateContext } from '../contexts/ContextProvider';


const ECommerce = () => {

    const { currentColor } = useStateContext()
    return (
        <Container>
            <div className='mt-28'>
                <div className='relative'>
                    <img src={myBg} className="w-100" />
                    <div className='absolute top-0 left-2'>
                        <p className="font-bold text-2xl text-gray-400">Earnings</p>
                        <p className="text-2xl ">$82,178.38</p>
                    </div>
                    <div className='mt-5'>
                        <Button variant="contained" sx={{ backgroundColor: currentColor }}>
                            Download
                        </Button>
                    </div>
                </div>
                <div className='mt-14'>
                    <div className='flex ml-16 flex-wrap'>
                        {
                            earningData.map((item) => (
                                <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 m-5 text-center p-4 pt-9 rounded-2xl ">
                                    <button
                                        type="button"
                                        style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                        className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                                    >
                                        {item.icon}
                                    </button>
                                    <p className="mt-3">
                                        <span className="text-lg font-semibold">{item.amount}</span>
                                        <span className={`text-sm text-${item.pcColor} ml-2`}>
                                            {item.percentage}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-400  mt-1">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-14 flex gap-10 flex-wrap justify-center">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
                        <div className="flex justify-between">
                            <p className="font-semibold text-xl">Revenue Updates</p>
                            <div className="flex items-center gap-4">
                                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    <span>Expense</span>
                                </p>
                                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    <span>Budget</span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex gap-10 flex-wrap justify-center">
                            <div className=" border-r-1 border-color m-4 pr-10">
                                <div>
                                    <p>
                                        <span className="text-3xl font-semibold">$93,438</span>
                                        <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                            23%
                                        </span>
                                    </p>
                                    <p className="text-gray-500 mt-1">Budget</p>
                                </div>
                                <div className="mt-8">
                                    <p className="text-3xl font-semibold">$48,487</p>

                                    <p className="text-gray-500 mt-1">Expense</p>
                                </div>

                                <div className="mt-5">
                                    <SparkLine
                                        id="line-sparkLine"
                                        type="Line"
                                        height="80px"
                                        width="250px"
                                        currentColor={currentColor}
                                        data={SparklineAreaData}
                                        color={currentColor}
                                    />
                                </div>
                                <div className="mt-10">

                                </div>
                            </div>
                            <div>
                                <Stacked width="320px" height="360px" />
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                </div>
            </div >
        </Container >
    );
};

export default ECommerce;