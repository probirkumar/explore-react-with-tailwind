import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const PriceOption = ({option}) => {
    return (
        <div className='bg-indigo-400 p-3 m-4 rounded-md'>
            <div>
                <h3>
                    <span className='text-7xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-300'>/mon</span>
                </h3>
                <p className='text-2xl my-3'>{option.name}</p>
            </div>
            <div className='flex items-center'>
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                <p className='ml-2'>Awesome Feature</p>
            </div>
        </div>
    );
};

export default PriceOption;