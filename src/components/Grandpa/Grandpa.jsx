import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Auncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export  const LevelContext = createContext('gold');

export const MoneyContext = createContext(0);


const Grandpa = () => {
    const ring ='diamond'
    const [money, setMoney]=useState(0)
  
    return (
        <div className='grandpa'>
            <h2>grandpa</h2>
            <p>Has money {money}</p>
       <MoneyContext.Provider value={[money, setMoney]}>
        <button onClick={()=>setMoney(money + 1000)}>Send Money</button>
       <LevelContext.Provider value='golder ring'>
          <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
          </LevelContext.Provider>
       </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * Website= react.dev
 * 1. create context
 * 2. create a provider and pass a value
 * 3. use useContext to receive
 * **/ 