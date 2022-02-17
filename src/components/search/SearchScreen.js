import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHeroByName } from '../selectors/getHeroByName';
export const SearchScreen = () => {
    const history = useHistory();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const [{ search }, onHandleChange, reset] = useInput({
        search: q,
    });
    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const onHandleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
        reset();
    };

    //luego de mandar el here a buscar por el submit del input
    //debo capturar el nombvre del heroe(;listo)
    //
    return (
        <div>
            <h1>Search Screen</h1>
            <div className='row'>
                <div className='col-5'>
                    <h4>search form</h4>
                    <hr />
                    <form>
                        <input
                            type='text'
                            name='search'
                            placeholder='find your hero'
                            className='form-control'
                            value={search}
                            onChange={onHandleChange}
                        />
                        <button
                            onClick={onHandleSearch}
                            type='submit'
                            className='btn m-1 btn-block btn-outline-primary'>
                            Search..
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />
                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
