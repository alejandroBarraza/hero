import { heroes } from '../../data/heros';

//return a hero given id
export const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};
