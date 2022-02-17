import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const MarvelView = () => {
    return (
        <div>
            <HeroesList publisher={'Marvel Comics'} />
        </div>
    );
};
