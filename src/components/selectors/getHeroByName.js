import { heroes } from '../../data/heros';

export const getHeroByName = (heroName = '') => {
    heroName = heroName.toLowerCase();
    console.log(heroName);
    return heroes.filter((hero) => hero.superhero.toLowerCase().includes(heroName.toLowerCase()));
};
