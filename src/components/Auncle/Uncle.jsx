import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>uncle</h3>
            <p><small> grandpa money: {money}</small></p>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>kobir</Cousin>
            </section>
        </div>
    );
};

export default Uncle;