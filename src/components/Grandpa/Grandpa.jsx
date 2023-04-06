import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Auncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {
    const ring ='diamond'
    return (
        <div className='grandpa'>
            <h2>grandpa</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;