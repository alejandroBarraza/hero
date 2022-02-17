import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DcView } from '../components/dc/DcView';
import { HeroView } from '../components/heroes/HeroView';
import { MarvelView } from '../components/marvel/MarvelView';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelView} />
                    <Route exact path='/hero/:heroesId' component={HeroView} />
                    <Route exact path='/dc' component={DcView} />
                    <Route exact path='/search' component={SearchScreen} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    );
};
