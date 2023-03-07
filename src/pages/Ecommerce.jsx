import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import product9 from '../data/product9.jpg';
const Ecommerce = () => {
  const { currentColor } = useStateContext()
  const getPerColor = (percentage) => {
    console.log(percentage);
    if (percentage[0] === '-') return {color: 'red'}
    else return {color: 'green'}
  }
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap justify-center lg:flex-nowrap'>
        <div className='w-full p-8 m-3 bg-white bg-center bg-no-repeat bg-cover dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 pt-9'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$999</p>
            </div>
            <button type='button' className='p-4 text-xl text-white rounded-full hover:drop-shadow-xl' style={{background: currentColor}}>
              <BsCurrencyDollar></BsCurrencyDollar>
            </button>
          </div>
          <div className='mt-6'>
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            ></Button>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-1 m-3'>
          {
            earningData.map((item) => (
              <div key={item.title} className="p-4 bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl ">
                <button type='button' className='p-4 text-2xl rounded-full' style={{background: item.iconBg, color: item.iconColor}}>
                  {item.icon}
                </button>
                <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2`} style={getPerColor(item.percentage)}>
                  {item.percentage}
                </span>
              </p>
                <p className='mt-2 text-sm text-gray-400'>
                  {item.title}
                </p>
                
              </div>
            ))
          }
        </div>
       
      </div>
    </div>
  )
}

export default Ecommerce
