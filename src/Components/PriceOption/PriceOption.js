import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;

    return (
        <div className='bg-indigo-400 p-3 m-4 rounded-md'>
            <div>
                <h3>
                    <span className='text-7xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-300'>/mon</span>
                </h3>
                <p className='text-2xl my-3'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature 
                    key = {idx}
                    feature = {feature}
                ></Feature>)
            }
            <button className='bg-green-600 text-2xl w-full py-4 mt-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;