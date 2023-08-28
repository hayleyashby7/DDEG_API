/* eslint-disable @typescript-eslint/no-explicit-any */
import { Difficulty } from './difficulty.types';
import { Monster } from './monster.types';

export interface EncounterRequest {
    characters: number;
    level: number;
    difficulty: Difficulty;
}

export interface Encounter {
    challengeRating: string | null;
    monsters: Monster[];
}
