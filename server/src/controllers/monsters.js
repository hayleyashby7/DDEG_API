import monstersService from '../services/monsters.js';

export const getMonsters = async (req, res, next) => {
    try {
        let monsters = null;
        req.query.challengeRating === undefined
            ? (monsters = await monstersService.getAllMonsters())
            : (monsters = await monstersService.getByChallengeRating(req.query.challengeRating));

        monsters
            ? res.status(200).json(monsters)
            : res.status(404).json({ message: 'No monsters found' });
    } catch (error) {
        next(error);
    }
};
