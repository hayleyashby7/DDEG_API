import db from '../database/db.js';

const monster_structure = {
    types: { select: { type: true } },
    sizes: { select: { size: true } },
   
};

export const monstersService = {
    getByChallengeRating: async (challengeRating) => {
        try {
            const monsters = await db.monsters.findMany({
                where: {
                    challenge_rating: parseFloat(challengeRating),
                },
                include: monster_structure,
            });
            return monsters;
        } catch (error) {
            throw error;
        }
    },

    getAllMonsters: async () => {
        try {
            return await db.monsters.findMany({ include: monster_structure });
        } catch (error) {
            throw error;
        }
    },
};

export default monstersService;