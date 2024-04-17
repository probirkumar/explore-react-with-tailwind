import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        { id: 1, name: 'Free', price: 0, features: [
            'Everything Free',
            'Awesome Feature',
            'Best Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Non Stop Feature',
            'Valuable Feature'
        ]
    },
        { id: 2, name: 'Medium', price: 9.99, features: [
            'Everythin Medium',
            'Awesome Feature',
            'Best Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Non Stop Feature',
            'Valuable Feature'
        ]
    },
        { id: 3, name: 'Premium', price: 18.99, features: [
            'Everything Premium',
            'Awesome Feature',
            'Best Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Non Stop Feature',
            'Valuable Feature'
        ]
     }
];


    return (
        <div>
            <h2 className='text-6xl font-bold bg-indigo-400 text-white p-12'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {
                    pricingOption.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;