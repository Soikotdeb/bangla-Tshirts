import React, { useContext } from 'react';
import { LevelContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(LevelContext)
    return (
        <div>
            <h3>Brother</h3>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Brother;