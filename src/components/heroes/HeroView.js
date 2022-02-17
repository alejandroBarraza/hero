import React, { useMemo } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getHeroById } from '../selectors/getHeroById';
import './HeroView.css';
export const HeroView = () => {
    const { heroesId } = useParams();

    const hero = useMemo(() => getHeroById(heroesId), [heroesId]);
    const history = useHistory();

    if (!hero) {
        return <Redirect to='/marvel' />;
    }

    const onHandleReturn = () => {
        history.goBack();
    };

    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img
                    src={`../assets/heroes/${hero.id}.jpg`}
                    alt={hero.superhero}
                    className='img-thumbnail'
                />
            </div>
            <div className='col-8'>
                <h3>{hero.superhero}</h3>
                <ul className='list-gorup list-group-flush'>
                    <li className='list-gorup-item'>{hero.alter_ego}</li>
                    <li className='list-gorup-item'>{hero.first_appearance}</li>
                    <li className='list-gorup-item'>{hero.characters}</li>
                </ul>
                <button onClick={onHandleReturn} className='btn btn-outline-info'>
                    Return
                </button>
            </div>
        </div>
    );
};
