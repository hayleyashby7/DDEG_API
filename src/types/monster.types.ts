export interface MonsterData {
    id: number;
    name: string;
    size_id: number;
    type_id: number;
    alignment: string;
    armor_class: number;
    armor_desc: string;
    challenge_rating: number;
    hit_points: number;
    hit_dice: string;
    language_desc: string;
    types: { type: string };
    sizes: { size: string };
    monster_stats: StatData[];
    monster_languages: LanguageData[];
    monster_senses: SenseData[];
    monster_skills: SkillData[];
    monster_speeds: SpeedData[];
    actions?: {
        actions?: string;
        legendary_actions?: string;
        reactions?: string;
    } | null;

    traits?: {
        traits: string;
    } | null;

    attributes?: {
        damage_immunities?: string;
        damage_resistances?: string;
        damage_vulnerabilities?: string;
        condition_immunities?: string;
    } | null;
}

interface SpeedData {
    speeds: {
        speed: string;
    };
    range: number;
}

interface StatData {
    stats: { stat: string };
    score: number;
    modifier: number;
    saving_throw: number;
}

interface SkillData {
    skills: {
        skill: string;
    };
    score: number;
}

interface SenseData {
    senses: {
        sense: string;
    };
    value: string;
}

interface LanguageData {
    languages: {
        name: string;
    };
    range: string;
}

export interface Monster {
    name: string;
    size: string;
    type: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    hit_dice: string;
    speed: Speed[];
    stats: Stat[];
    skills: Skill[];
    damage_immunities?: string;
    damage_resistances?: string;
    damage_vulnerabilities?: string;
    condition_immunities?: string;
    senses: Sense[];
    languages: Language[];
    language_desc: string;
    challenge_rating: number;
    traits?: string;
    actions?: string;
    legendary_actions?: string;
    reactions?: string;
}

export const isMonster = (object: any): object is Monster => true;

interface Speed {
    movement_type: string;
    range: number;
}

interface Stat {
    stat: string;
    score: number;
    modifier: number;
    saving_throw: number;
}

interface Skill {
    skill: string;
    score: number;
}

interface Sense {
    sense: string;
    value: string;
}

interface Language {
    language: string;
    range: string;
}
