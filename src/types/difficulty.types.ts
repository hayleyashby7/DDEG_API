export const DIFFICULTY = ['Easy', 'Medium', 'Hard', 'Deadly'] as const;

export type Difficulty = (typeof DIFFICULTY)[number];

export enum DIFFICULTIES {
    Easy = 'Easy',
    Medium = 'Medium',
    Hard = 'Hard',
    Deadly = 'Deadly',
}

export type Difficulties = (typeof DIFFICULTIES)[Difficulty];

export const isDifficulty = (difficulty: string): difficulty is Difficulty => {
    return DIFFICULTY.includes(difficulty as Difficulty);
}
