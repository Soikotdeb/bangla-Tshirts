import React, { useContext } from 'react';
import { LevelContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(LevelContext)
    return (
        <div>
            <h3>Special</h3>
            <p><small>{ring}</small></p>
            <p><small>{angti}</small></p>
        </div>
    );
};

export default Special;