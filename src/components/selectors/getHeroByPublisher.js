import { heroes } from '../../data/heros';

export const getHeroByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if (!validPublisher.includes(publisher)) {
        throw new Error(`published "${publisher}" doest not exist`);
    }

    return heroes.filter((hero) => hero.publisher === publisher);
};
