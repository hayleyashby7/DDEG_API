import { db } from '../database/db.js';

const monster_structure = {
    types: { select: { type: true } },
    sizes: { select: { size: true } },
    monster_stats: {
        select: {
            stats: { select: { stat: true } },
            score: true,
            modifier: true,
            saving_throw: true,
        },
    },
    monster_languages: {
        select: {
            languages: { select: { name: true } },
            range: true,
        },
    },
    monster_senses: {
        select: { senses: { select: { sense: true } }, value: true },
    },

    monster_skills: {
        select: { skills: { select: { skill: true } }, score: true },
    },
    monster_speeds: {
        select: { speeds: { select: { speed: true } }, range: true },
    },
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
