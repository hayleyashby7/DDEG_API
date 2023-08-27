import { Monster, MonsterData } from '../types/monster.types';
import { User } from '../types/user.types';
import { EncounterRequest, Encounter } from '../types/encounter.types';
import { XPChallengeRating } from '../types/challenge_rating.types';

export const mockChallengeRatingMonsters: Monster[] = [
    {
        name: 'Aboleth',
        size: 'Large',
        type: 'Aberration',
        alignment: 'lawful evil',
        armor_class: 17,
        hit_points: 135,
        hit_dice: '18d10 + 36',
        speed: [
            {
                movement_type: 'swim',
                range: 40,
            },
            {
                movement_type: 'walk',
                range: 10,
            },
        ],
        stats: [
            {
                stat: 'STR',
                score: 21,
                modifier: 5,
                saving_throw: 0,
            },
            {
                stat: 'DEX',
                score: 9,
                modifier: -1,
                saving_throw: 0,
            },
            {
                stat: 'CON',
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stat: 'INT',
                score: 18,
                modifier: 4,
                saving_throw: 8,
            },
            {
                stat: 'WIS',
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stat: 'CHA',
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
        ],
        skills: [
            {
                skill: 'History',
                score: 12,
            },
            {
                skill: 'Perception',
                score: 10,
            },
        ],
        senses: [
            {
                sense: 'Darkvision',
                value: '120ft',
            },
            {
                sense: 'Passive Perception',
                value: '20',
            },
        ],
        languages: [
            {
                language: 'Deep Speech',
                range: '',
            },
            {
                language: 'Telepathy',
                range: '120 ft',
            },
        ],
        language_desc: '',
        challenge_rating: 10,
        traits: "<p><em><strong>Amphibious.</strong></em> The aboleth can breathe air and water. </p><p><em><strong>Mucous Cloud.</strong></em> While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater. </p><p><em><strong>Probing Telepathy.</strong></em> If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>",
        actions:
            "<p><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. </p><p><em><strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. </p><p>Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>",
        legendary_actions:
            "<p>The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The aboleth makes a Wisdom (Perception) check. </p><p><em><strong>Tail Swipe.</strong></em> The aboleth makes one tail attack. </p><p><em><strong>Psychic Drain</strong></em> (Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>",
        reactions: '',
    },
    {
        name: 'Deva',
        size: 'Medium',
        type: 'Celestial',
        alignment: 'lawful good',
        armor_class: 17,
        hit_points: 136,
        hit_dice: '16d8 + 64',
        speed: [
            {
                movement_type: 'fly',
                range: 90,
            },
            {
                movement_type: 'walk',
                range: 30,
            },
        ],
        stats: [
            {
                stat: 'STR',
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stat: 'DEX',
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stat: 'CON',
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stat: 'INT',
                score: 17,
                modifier: 3,
                saving_throw: 0,
            },
            {
                stat: 'WIS',
                score: 20,
                modifier: 5,
                saving_throw: 9,
            },
            {
                stat: 'CHA',
                score: 20,
                modifier: 5,
                saving_throw: 9,
            },
        ],
        skills: [
            {
                skill: 'Insight',
                score: 9,
            },
            {
                skill: 'Perception',
                score: 9,
            },
        ],
        damage_immunities: '',
        damage_resistances: 'Radiant; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks',
        damage_vulnerabilities: '',
        condition_immunities: 'Charmed, Exhaustion, Frightened',
        senses: [
            {
                sense: 'Darkvision',
                value: '120ft',
            },
            {
                sense: 'Passive Perception',
                value: '19',
            },
        ],
        languages: [
            {
                language: 'Telepathy',
                range: '120 ft',
            },
        ],
        language_desc: 'All',
        challenge_rating: 10,
        traits: "<p><em><strong>Angelic Weapons.</strong></em> The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack). </p><p><em><strong>Innate Spellcasting.</strong></em> The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: </p><p>At will: detect evil and good </p><p>1/day each: commune, raise dead </p><p><em><strong>Magic Resistance.</strong></em> The deva has advantage on saving throws against spells and other magical effects.</p>",
        actions:
            "<p><em><strong>Multiattack.</strong></em> The deva makes two melee attacks. </p><p><em><strong>Mace.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage. </p><p><em><strong>Healing Touch (3/Day).</strong></em> The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness. </p><p><em><strong>Change Shape.</strong></em> The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).</p><p>In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.</p>",
        legendary_actions: '',
        reactions: '',
    },
];

export const mockAllMonsters: Monster[] = [
    {
        name: 'Aboleth',
        size: 'Large',
        type: 'Aberration',
        alignment: 'lawful evil',
        armor_class: 17,
        hit_points: 135,
        hit_dice: '18d10 + 36',
        speed: [
            {
                movement_type: 'swim',
                range: 40,
            },
            {
                movement_type: 'walk',
                range: 10,
            },
        ],
        stats: [
            {
                stat: 'STR',
                score: 21,
                modifier: 5,
                saving_throw: 0,
            },
            {
                stat: 'DEX',
                score: 9,
                modifier: -1,
                saving_throw: 0,
            },
            {
                stat: 'CON',
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stat: 'INT',
                score: 18,
                modifier: 4,
                saving_throw: 8,
            },
            {
                stat: 'WIS',
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stat: 'CHA',
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
        ],
        skills: [
            {
                skill: 'History',
                score: 12,
            },
            {
                skill: 'Perception',
                score: 10,
            },
        ],
        senses: [
            {
                sense: 'Darkvision',
                value: '120ft',
            },
            {
                sense: 'Passive Perception',
                value: '20',
            },
        ],
        languages: [
            {
                language: 'Deep Speech',
                range: '',
            },
            {
                language: 'Telepathy',
                range: '120 ft',
            },
        ],
        language_desc: '',
        challenge_rating: 10,
        traits: "<p><em><strong>Amphibious.</strong></em> The aboleth can breathe air and water. </p><p><em><strong>Mucous Cloud.</strong></em> While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater. </p><p><em><strong>Probing Telepathy.</strong></em> If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>",
        actions:
            "<p><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. </p><p><em><strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. </p><p>Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>",
        legendary_actions:
            "<p>The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The aboleth makes a Wisdom (Perception) check. </p><p><em><strong>Tail Swipe.</strong></em> The aboleth makes one tail attack. </p><p><em><strong>Psychic Drain</strong></em> (Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>",
        reactions: '',
    },
    {
        name: 'Acolyte',
        size: 'Medium',
        type: 'Humanoid',
        alignment: 'any',
        armor_class: 10,
        hit_points: 9,
        hit_dice: '2d8',
        speed: [
            {
                movement_type: 'walk',
                range: 30,
            },
        ],
        stats: [
            {
                stat: 'STR',
                score: 10,
                modifier: 0,
                saving_throw: 0,
            },
            {
                stat: 'DEX',
                score: 10,
                modifier: 0,
                saving_throw: 0,
            },
            {
                stat: 'CON',
                score: 10,
                modifier: 0,
                saving_throw: 0,
            },
            {
                stat: 'INT',
                score: 10,
                modifier: 0,
                saving_throw: 0,
            },
            {
                stat: 'WIS',
                score: 14,
                modifier: 2,
                saving_throw: 0,
            },
            {
                stat: 'CHA',
                score: 11,
                modifier: 0,
                saving_throw: 0,
            },
        ],
        skills: [
            {
                skill: 'Medicine',
                score: 4,
            },
            {
                skill: 'Religion',
                score: 2,
            },
        ],
        senses: [
            {
                sense: 'Passive Perception',
                value: '12',
            },
        ],
        languages: [],
        language_desc: 'Any one language (usually Common)',
        challenge_rating: 0.25,
        traits: '<p><em><strong>Spellcasting.</strong></em> The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared: </p><p>Cantrips (at will): light, sacred flame, thaumaturgy </p><p>1st level (3 slots): bless, cure wounds, sanctuary</p>',
        actions:
            '<p><em><strong>Club.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) bludgeoning damage.</p>',
        legendary_actions: '',
        reactions: '',
    },
    {
        name: 'Adult Black Dragon',
        size: 'Huge',
        type: 'Dragon',
        alignment: 'chaotic evil',
        armor_class: 19,
        hit_points: 195,
        hit_dice: '17d12 + 85',
        speed: [
            {
                movement_type: 'fly',
                range: 80,
            },
            {
                movement_type: 'swim',
                range: 40,
            },
            {
                movement_type: 'walk',
                range: 40,
            },
        ],
        stats: [
            {
                stat: 'STR',
                score: 23,
                modifier: 6,
                saving_throw: 0,
            },
            {
                stat: 'DEX',
                score: 14,
                modifier: 2,
                saving_throw: 7,
            },
            {
                stat: 'CON',
                score: 21,
                modifier: 5,
                saving_throw: 10,
            },
            {
                stat: 'INT',
                score: 14,
                modifier: 2,
                saving_throw: 0,
            },
            {
                stat: 'WIS',
                score: 13,
                modifier: 1,
                saving_throw: 6,
            },
            {
                stat: 'CHA',
                score: 17,
                modifier: 3,
                saving_throw: 8,
            },
        ],
        skills: [
            {
                skill: 'Perception',
                score: 11,
            },
            {
                skill: 'Stealth',
                score: 7,
            },
        ],
        damage_immunities: 'Acid',
        damage_resistances: '',
        damage_vulnerabilities: '',
        condition_immunities: '',
        senses: [
            {
                sense: 'Blindsight',
                value: '60ft',
            },
            {
                sense: 'Darkvision',
                value: '120ft.',
            },
            {
                sense: 'Passive Perception',
                value: '21',
            },
        ],
        languages: [
            {
                language: 'Common',
                range: '',
            },
            {
                language: 'Draconic',
                range: '',
            },
        ],
        language_desc: '',
        challenge_rating: 14,
        traits: '<p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>',
        actions:
            "<p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage.</p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 15 ft., one target. <em>Hit:</em> 15 (2d8 + 6) bludgeoning damage.</p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p><p><em><strong>Acid Breath (Recharge 5–6).</strong></em> The dragon exhales acid in a 60-­foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.</p>",
        legendary_actions:
            "<p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn.</p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check.</p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack.</p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
        reactions: '',
    },
];

export const mockDBMonstersByChallengeRating: MonsterData[] = [
    {
        id: 1,
        name: 'Aboleth',
        size_id: 4,
        type_id: 1,
        alignment: 'lawful evil',
        armor_class: 17,
        armor_desc: 'Natural Armor',
        challenge_rating: 10,
        hit_points: 135,
        hit_dice: '18d10 + 36',
        language_desc: '',
        types: {
            type: 'Aberration',
        },
        sizes: {
            size: 'Large',
        },
        monster_stats: [
            {
                stats: {
                    stat: 'STR',
                },
                score: 21,
                modifier: 5,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'DEX',
                },
                score: 9,
                modifier: -1,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'CON',
                },
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stats: {
                    stat: 'INT',
                },
                score: 18,
                modifier: 4,
                saving_throw: 8,
            },
            {
                stats: {
                    stat: 'WIS',
                },
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stats: {
                    stat: 'CHA',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
        ],
        monster_languages: [
            {
                languages: {
                    name: 'Deep Speech',
                },
                range: '',
            },
            {
                languages: {
                    name: 'Telepathy',
                },
                range: '120 ft',
            },
        ],
        monster_senses: [
            {
                senses: {
                    sense: 'Darkvision',
                },
                value: '120ft',
            },
            {
                senses: {
                    sense: 'Passive Perception',
                },
                value: '20',
            },
        ],
        monster_skills: [
            {
                skills: {
                    skill: 'History',
                },
                score: 12,
            },
            {
                skills: {
                    skill: 'Perception',
                },
                score: 10,
            },
        ],
        monster_speeds: [
            {
                speeds: {
                    speed: 'swim',
                },
                range: 40,
            },
            {
                speeds: {
                    speed: 'walk',
                },
                range: 10,
            },
        ],
        actions: {
            actions:
                "<p><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. </p><p><em><strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. </p><p>Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>",
            legendary_actions:
                "<p>The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The aboleth makes a Wisdom (Perception) check. </p><p><em><strong>Tail Swipe.</strong></em> The aboleth makes one tail attack. </p><p><em><strong>Psychic Drain</strong></em> (Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>",
            reactions: '',
        },
        traits: {
            traits: "<p><em><strong>Amphibious.</strong></em> The aboleth can breathe air and water. </p><p><em><strong>Mucous Cloud.</strong></em> While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater. </p><p><em><strong>Probing Telepathy.</strong></em> If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>",
        },
        attributes: null,
    },
    {
        id: 80,
        name: 'Deva',
        size_id: 3,
        type_id: 13,
        alignment: 'lawful good',
        armor_class: 17,
        armor_desc: 'Natural Armor',
        challenge_rating: 10,
        hit_points: 136,
        hit_dice: '16d8 + 64',
        language_desc: 'All',
        types: {
            type: 'Celestial',
        },
        sizes: {
            size: 'Medium',
        },
        monster_stats: [
            {
                stats: {
                    stat: 'STR',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'DEX',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'CON',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'INT',
                },
                score: 17,
                modifier: 3,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'WIS',
                },
                score: 20,
                modifier: 5,
                saving_throw: 9,
            },
            {
                stats: {
                    stat: 'CHA',
                },
                score: 20,
                modifier: 5,
                saving_throw: 9,
            },
        ],
        monster_languages: [
            {
                languages: {
                    name: 'Telepathy',
                },
                range: '120 ft',
            },
        ],
        monster_senses: [
            {
                senses: {
                    sense: 'Darkvision',
                },
                value: '120ft',
            },
            {
                senses: {
                    sense: 'Passive Perception',
                },
                value: '19',
            },
        ],
        monster_skills: [
            {
                skills: {
                    skill: 'Insight',
                },
                score: 9,
            },
            {
                skills: {
                    skill: 'Perception',
                },
                score: 9,
            },
        ],
        monster_speeds: [
            {
                speeds: {
                    speed: 'fly',
                },
                range: 90,
            },
            {
                speeds: {
                    speed: 'walk',
                },
                range: 30,
            },
        ],
        actions: {
            actions:
                "<p><em><strong>Multiattack.</strong></em> The deva makes two melee attacks. </p><p><em><strong>Mace.</strong></em> <em>Melee Weapon Attack:</em> +8 to hit, reach 5 ft., one target. <em>Hit:</em> 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage. </p><p><em><strong>Healing Touch (3/Day).</strong></em> The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness. </p><p><em><strong>Change Shape.</strong></em> The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).</p><p>In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.</p>",
            legendary_actions: '',
            reactions: '',
        },
        traits: {
            traits: "<p><em><strong>Angelic Weapons.</strong></em> The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack). </p><p><em><strong>Innate Spellcasting.</strong></em> The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: </p><p>At will: detect evil and good </p><p>1/day each: commune, raise dead </p><p><em><strong>Magic Resistance.</strong></em> The deva has advantage on saving throws against spells and other magical effects.</p>",
        },
        attributes: {
            damage_immunities: '',
            damage_resistances:
                'Radiant; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks',
            damage_vulnerabilities: '',
            condition_immunities: 'Charmed, Exhaustion, Frightened',
        },
    },
];

export const mockDBAllMonsters: MonsterData[] = [
    {
        id: 1,
        name: 'Aboleth',
        size_id: 4,
        type_id: 1,
        alignment: 'lawful evil',
        armor_class: 17,
        armor_desc: 'Natural Armor',
        challenge_rating: 10,
        hit_points: 135,
        hit_dice: '18d10 + 36',
        language_desc: '',
        types: {
            type: 'Aberration',
        },
        sizes: {
            size: 'Large',
        },
        monster_stats: [
            {
                stats: {
                    stat: 'STR',
                },
                score: 21,
                modifier: 5,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'DEX',
                },
                score: 9,
                modifier: -1,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'CON',
                },
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stats: {
                    stat: 'INT',
                },
                score: 18,
                modifier: 4,
                saving_throw: 8,
            },
            {
                stats: {
                    stat: 'WIS',
                },
                score: 15,
                modifier: 2,
                saving_throw: 6,
            },
            {
                stats: {
                    stat: 'CHA',
                },
                score: 18,
                modifier: 4,
                saving_throw: 0,
            },
        ],
        monster_languages: [
            {
                languages: {
                    name: 'Deep Speech',
                },
                range: '',
            },
            {
                languages: {
                    name: 'Telepathy',
                },
                range: '120 ft',
            },
        ],
        monster_senses: [
            {
                senses: {
                    sense: 'Darkvision',
                },
                value: '120ft',
            },
            {
                senses: {
                    sense: 'Passive Perception',
                },
                value: '20',
            },
        ],
        monster_skills: [
            {
                skills: {
                    skill: 'History',
                },
                score: 12,
            },
            {
                skills: {
                    skill: 'Perception',
                },
                score: 10,
            },
        ],
        monster_speeds: [
            {
                speeds: {
                    speed: 'swim',
                },
                range: 40,
            },
            {
                speeds: {
                    speed: 'walk',
                },
                range: 10,
            },
        ],
        actions: {
            actions:
                "<p><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. </p><p><em><strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. </p><p>Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>",
            legendary_actions:
                "<p>The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The aboleth makes a Wisdom (Perception) check. </p><p><em><strong>Tail Swipe.</strong></em> The aboleth makes one tail attack. </p><p><em><strong>Psychic Drain</strong></em> (Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>",
            reactions: '',
        },
        traits: {
            traits: "<p><em><strong>Amphibious.</strong></em> The aboleth can breathe air and water. </p><p><em><strong>Mucous Cloud.</strong></em> While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater. </p><p><em><strong>Probing Telepathy.</strong></em> If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>",
        },
        attributes: null,
    },
    {
        id: 2,
        name: 'Acolyte',
        size_id: 3,
        type_id: 2,
        alignment: 'any',
        armor_class: 10,
        armor_desc: '',
        challenge_rating: 0.25,
        hit_points: 9,
        hit_dice: '2d8',
        language_desc: 'Any one language (usually Common)',
        types: {
            type: 'Humanoid',
        },
        sizes: {
            size: 'Medium',
        },
        monster_stats: [
            {
                stats: {
                    stat: 'STR',
                },
                score: 10,
                modifier: 0,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'DEX',
                },
                score: 10,
                modifier: 0,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'CON',
                },
                score: 10,
                modifier: 0,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'INT',
                },
                score: 10,
                modifier: 0,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'WIS',
                },
                score: 14,
                modifier: 2,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'CHA',
                },
                score: 11,
                modifier: 0,
                saving_throw: 0,
            },
        ],
        monster_languages: [],
        monster_senses: [
            {
                senses: {
                    sense: 'Passive Perception',
                },
                value: '12',
            },
        ],
        monster_skills: [
            {
                skills: {
                    skill: 'Medicine',
                },
                score: 4,
            },
            {
                skills: {
                    skill: 'Religion',
                },
                score: 2,
            },
        ],
        monster_speeds: [
            {
                speeds: {
                    speed: 'walk',
                },
                range: 30,
            },
        ],
        actions: {
            actions:
                '<p><em><strong>Club.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) bludgeoning damage.</p>',
            legendary_actions: '',
            reactions: '',
        },
        traits: {
            traits: '<p><em><strong>Spellcasting.</strong></em> The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared: </p><p>Cantrips (at will): light, sacred flame, thaumaturgy </p><p>1st level (3 slots): bless, cure wounds, sanctuary</p>',
        },
        attributes: null,
    },
    {
        id: 3,
        name: 'Adult Black Dragon',
        size_id: 5,
        type_id: 3,
        alignment: 'chaotic evil',
        armor_class: 19,
        armor_desc: 'Natural Armor',
        challenge_rating: 14,
        hit_points: 195,
        hit_dice: '17d12 + 85',
        language_desc: '',
        types: {
            type: 'Dragon',
        },
        sizes: {
            size: 'Huge',
        },
        monster_stats: [
            {
                stats: {
                    stat: 'STR',
                },
                score: 23,
                modifier: 6,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'DEX',
                },
                score: 14,
                modifier: 2,
                saving_throw: 7,
            },
            {
                stats: {
                    stat: 'CON',
                },
                score: 21,
                modifier: 5,
                saving_throw: 10,
            },
            {
                stats: {
                    stat: 'INT',
                },
                score: 14,
                modifier: 2,
                saving_throw: 0,
            },
            {
                stats: {
                    stat: 'WIS',
                },
                score: 13,
                modifier: 1,
                saving_throw: 6,
            },
            {
                stats: {
                    stat: 'CHA',
                },
                score: 17,
                modifier: 3,
                saving_throw: 8,
            },
        ],
        monster_languages: [
            {
                languages: {
                    name: 'Common',
                },
                range: '',
            },
            {
                languages: {
                    name: 'Draconic',
                },
                range: '',
            },
        ],
        monster_senses: [
            {
                senses: {
                    sense: 'Blindsight',
                },
                value: '60ft',
            },
            {
                senses: {
                    sense: 'Darkvision',
                },
                value: '120ft.',
            },
            {
                senses: {
                    sense: 'Passive Perception',
                },
                value: '21',
            },
        ],
        monster_skills: [
            {
                skills: {
                    skill: 'Perception',
                },
                score: 11,
            },
            {
                skills: {
                    skill: 'Stealth',
                },
                score: 7,
            },
        ],
        monster_speeds: [
            {
                speeds: {
                    speed: 'fly',
                },
                range: 80,
            },
            {
                speeds: {
                    speed: 'swim',
                },
                range: 40,
            },
            {
                speeds: {
                    speed: 'walk',
                },
                range: 40,
            },
        ],
        actions: {
            actions:
                "<p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.</p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.</p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage.</p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 15 ft., one target. <em>Hit:</em> 15 (2d8 + 6) bludgeoning damage.</p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.</p><p><em><strong>Acid Breath (Recharge 5–6).</strong></em> The dragon exhales acid in a 60-­foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.</p>",
            legendary_actions:
                "<p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn.</p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check.</p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack.</p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
            reactions: '',
        },
        traits: {
            traits: '<p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water.</p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>',
        },
        attributes: {
            damage_immunities: 'Acid',
            damage_resistances: '',
            damage_vulnerabilities: '',
            condition_immunities: '',
        },
    },
];

export const mockAuthUser: User = {
    user_id: '1',
    key: '1234567890',
    created_at: '2020-01-01T00:00:00.000Z' as unknown as Date,
    updated_at: '2020-01-01T00:00:00.000Z' as unknown as Date,
};

export const mockEncounterRequest: EncounterRequest = {
    characters: 4,
    level: 6,
    difficulty: 'Hard',
};

export const mockEnounterResponse: Encounter = {
    challengeRating: 10,
    monsters: mockChallengeRatingMonsters,
};

export const mockXpRange: number[] = [5700, 6400];

export const mockXPChallengeRating: XPChallengeRating[] = [
    { CR: '1/8', XP: 25 },
    { CR: '9', XP: 5000 },
    { CR: '10', XP: 5900 },
    { CR: '11', XP: 7200 },
    { CR: '30', XP: 155000 },
];
