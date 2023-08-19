import db from '../database/db.js';

export const monstersService = {
    getByChallengeRating: async (challengeRating) => {
        try {
            const monsters = await db.monsters.findMany({
                where: {
                    challenge_rating: parseFloat(challengeRating),
                },
                include: {
                    types: { select: { type: true } },
                    sizes: { select: { size: true } },
                    monsters_senses: {
                        select: { senses: { select: { sense: true } }, value: true },
                    },
                    monster_stats: {
                        select: {
                            stats: { select: { stat: true } },
                            score: true,
                            modifier: true,
                            saving_throw: true,
                        },
                    },
                },
            });
            return monsters;
        } catch (error) {
            throw error;
        }
    },

    getAllMonsters: async () => {
        try {
            return await db.monsters.findAll();
        } catch (error) {
            throw error;
        }
    },
};

export default monstersService;
