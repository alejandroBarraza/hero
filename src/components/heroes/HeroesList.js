import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';
import './heroesList.css';

// component than return a list of heroes given publihser(marvel/dc) as props
//ex: <HeroesList publisher={'marvel'}/> returns a list of all the heroes from the publisher marvel.
export const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div>
            {heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    );
};
