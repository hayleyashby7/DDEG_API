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
    actions: { select: { actions: true, legendary_actions: true, reactions: true } },
    traits: { select: { traits: true } },
    attributes: {
        select: {
            damage_immunities: true,
            damage_resistances: true,
            damage_vulnerabilities: true,
            condition_immunities: true,
        },
    },
};

const monsterObject = (monster) => {
    return {
        name: monster.name,
        size: monster.sizes.size,
        type: monster.types.type,
        alignment: monster.alignment,
        armor_class: monster.armor_class,
        hit_points: monster.hit_points,
        hit_dice: monster.hit_dice,
        speed: monster.monster_speeds.map((speed) => {
            return { movement_type: speed.speeds.speed, range: speed.range };
        }),
        stats: monster.monster_stats.map((stat) => {
            return {
                stat: stat.stats.stat,
                score: stat.score,
                modifier: stat.modifier,
                saving_throw: stat.saving_throw,
            };
        }),
        skills: monster.monster_skills.map((skill) => {
            return { skill: skill.skills.skill, score: skill.score };
        }),
        damage_immunities: monster.attributes.damage_immunities,
        damage_resistances: monster.attributes.damage_resistances,
        damage_vulnerabilities: monster.attributes.damage_vulnerabilities,
        condition_immunities: monster.attributes.condition_immunities,
        senses: monster.monster_senses.map((sense) => {
            return { sense: sense.senses.sense, value: sense.value };
        }),
        languages: monster.monster_languages.map((language) => {
            return { language: language.languages.name, range: language.range };
        }),
        language_desc: monster.language_desc,
        challenge_rating: monster.challenge_rating,
        traits: monster.traits.map((trait) => {
            return { trait: trait.traits };
        }),
        actions: monster.actions.map((action) => {
            return {
                action: action.actions,
                legendary_actions: action.legendary_actions,
                reactions: action.reactions,
            };
        }),
    };
};

export const monstersService = {
    getByChallengeRating: async (challengeRating) => {
        try {
            const data = await db.monsters.findMany({
                where: {
                    challenge_rating: parseFloat(challengeRating),
                },
                include: monster_structure,
            });
            const monsters = data.map((monster) => monsterObject(monster));
            return monsters;
        } catch (error) {
            throw error;
        }
    },

    getAllMonsters: async () => {
        try {
            const data = await db.monsters.findMany({ include: monster_structure });
            const monsters = data.map((monster) => monsterObject(monster));
            return monsters;
        } catch (error) {
            throw error;
        }
    },
};

export default monstersService;
