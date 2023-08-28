import { isDifficulty } from '../types/difficulty.types';
import { Encounter, EncounterRequest } from '../types/encounter.types';
import { calculateChallengeRating, convertChallengeRatingToFloat } from '../utils/challenge_rating';
import monstersService from './monsters';

export const isValidEncounterRequest = (encounterRequest: EncounterRequest): boolean => {
    const { characters, level, difficulty } = encounterRequest;

    if (characters < 1 || characters > 10) return false;

    if (level < 1 || level > 20) return false;

    if (!isDifficulty(difficulty)) return false;

    return true;
};

export const encounterService = {
    generateEncounter: async (encounterRequest: EncounterRequest): Promise<Encounter> => {
        try {
            if (!isValidEncounterRequest(encounterRequest)) {
                throw new Error('Invalid encounter request');
            }

            const encounter: Encounter = {
                challengeRating: null,
                monsters: [],
            };

            const challengeRating = calculateChallengeRating(encounterRequest);

            if (!challengeRating) {
                encounter.monsters = await monstersService.getAllMonsters();
                return encounter;
            }

            // Challenge rating needs to be a float for database query
            const numericChallengeRating = convertChallengeRatingToFloat(challengeRating);

            if (!numericChallengeRating) {
                throw new Error('Invalid challenge rating');
            }

            encounter.monsters = await monstersService.getByChallengeRating(numericChallengeRating);
            encounter.challengeRating = challengeRating;

            return encounter;
        } catch (err) {
            const error = err as Error;
            throw new Error(`Error: Cannot generate encounter - ${error.message}`);
        }
    },
};

export default encounterService;
