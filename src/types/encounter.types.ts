import { Difficulty } from "./difficulty.types";

export interface EncounterRequest {
    characters: number;
    level: number;
    difficulty: Difficulty;
}
