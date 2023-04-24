import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Attributes from '../Attributes';

describe('Attributes component', () => {
    it('should render the component', () => {
        // Arrange
        const data = {
            strength_save: 1,
            dexterity_save: 2,
            constitution_save: 3,
            intelligence_save: 4,
            wisdom_save: 5,
            charisma_save: 6,
            skills: {
                acrobatics: 1,
                animal_handling: 2,
                arcana: 3,
                athletics: 4,
                deception: 5,
                history: 6,
                insight: 7,
                intimidation: 8,
                investigation: 9,
                medicine: 10,
                nature: 11,
                perception: 12,
                performance: 13,
                persuasion: 14,
                religion: 15,
                sleight_of_hand: 16,
                stealth: 17,
                survival: 18,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.getByText('Saving Throws')).toBeInTheDocument();
        expect(screen.getByText('STR +1')).toBeInTheDocument();
        expect(screen.getByText('DEX +2')).toBeInTheDocument();
        expect(screen.getByText('CON +3')).toBeInTheDocument();
        expect(screen.getByText('INT +4')).toBeInTheDocument();
        expect(screen.getByText('WIS +5')).toBeInTheDocument();
        expect(screen.getByText('CHA +6')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
        expect(screen.getByText('Acrobatics +1')).toBeInTheDocument();
        expect(screen.getByText('Animal handling +2')).toBeInTheDocument();
        expect(screen.getByText('Arcana +3')).toBeInTheDocument();
        expect(screen.getByText('Athletics +4')).toBeInTheDocument();
        expect(screen.getByText('Deception +5')).toBeInTheDocument();
        expect(screen.getByText('History +6')).toBeInTheDocument();
        expect(screen.getByText('Insight +7')).toBeInTheDocument();
        expect(screen.getByText('Intimidation +8')).toBeInTheDocument();
        expect(screen.getByText('Investigation +9')).toBeInTheDocument();
        expect(screen.getByText('Medicine +10')).toBeInTheDocument();
        expect(screen.getByText('Nature +11')).toBeInTheDocument();
        expect(screen.getByText('Perception +12')).toBeInTheDocument();
        expect(screen.getByText('Performance +13')).toBeInTheDocument();
        expect(screen.getByText('Persuasion +14')).toBeInTheDocument();
        expect(screen.getByText('Religion +15')).toBeInTheDocument();
        expect(screen.getByText('Sleight of hand +16')).toBeInTheDocument();
        expect(screen.getByText('Stealth +17')).toBeInTheDocument();
        expect(screen.getByText('Survival +18')).toBeInTheDocument();
        expect(screen.getByText('Damage Vulnerabilities')).toBeInTheDocument();
        expect(screen.getByText('Fire')).toBeInTheDocument();
        expect(screen.getByText('Damage Resistances')).toBeInTheDocument();
        expect(screen.getByText('Acid')).toBeInTheDocument();
        expect(screen.getByText('Damage Immunities')).toBeInTheDocument();
        expect(screen.getByText('Cold')).toBeInTheDocument();
        expect(screen.getByText('Condition Immunities')).toBeInTheDocument();
        expect(screen.getByText('Frightened')).toBeInTheDocument();
        expect(screen.getByText('Senses')).toBeInTheDocument();
        expect(screen.getByText('darkvision 60 ft.')).toBeInTheDocument();
        expect(screen.getByText('Languages')).toBeInTheDocument();
        expect(screen.getByText('Common, Primordial, Draconic')).toBeInTheDocument();
        expect(screen.getByText('Challenge')).toBeInTheDocument();
        expect(screen.getByText('21')).toBeInTheDocument();
    });

    it('should render the other saving throws with no value in strength saving throw', () => {
        // Arrange
        const data = {
            strength_save: null,
            dexterity_save: 2,
            constitution_save: 3,
            intelligence_save: 4,
            wisdom_save: 5,
            charisma_save: 6,
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.getByText('Saving Throws')).toBeInTheDocument();
        expect(screen.queryByText('STR')).not.toBeInTheDocument();
        expect(screen.getByText('DEX +2')).toBeInTheDocument();
        expect(screen.getByText('CON +3')).toBeInTheDocument();
        expect(screen.getByText('INT +4')).toBeInTheDocument();
        expect(screen.getByText('WIS +5')).toBeInTheDocument();
        expect(screen.getByText('CHA +6')).toBeInTheDocument();
    });

    it('should render the other saving throws with no value in dexterity saving throw', () => {
        // Arrange
        const data = {
            strength_save: 1,
            dexterity_save: null,
            constitution_save: 3,
            intelligence_save: 4,
            wisdom_save: 5,
            charisma_save: 6,
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.getByText('Saving Throws')).toBeInTheDocument();
        expect(screen.getByText('STR +1')).toBeInTheDocument();
        expect(screen.queryByText('DEX')).not.toBeInTheDocument();
        expect(screen.getByText('CON +3')).toBeInTheDocument();
        expect(screen.getByText('INT +4')).toBeInTheDocument();
        expect(screen.getByText('WIS +5')).toBeInTheDocument();
        expect(screen.getByText('CHA +6')).toBeInTheDocument();
    });

    it('should render the other saving throws with no value in constitution saving throw', () => {
        // Arrange
        const data = {
            strength_save: 1,
            dexterity_save: 2,
            constitution_save: null,
            intelligence_save: 4,
            wisdom_save: 5,
            charisma_save: 6,
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.getByText('Saving Throws')).toBeInTheDocument();
        expect(screen.getByText('STR +1')).toBeInTheDocument();
        expect(screen.getByText('DEX +2')).toBeInTheDocument();
        expect(screen.queryByText('CON')).not.toBeInTheDocument();
        expect(screen.getByText('INT +4')).toBeInTheDocument();
        expect(screen.getByText('WIS +5')).toBeInTheDocument();
        expect(screen.getByText('CHA +6')).toBeInTheDocument();
    });

    it('should render the other saving throws with no value in intelligence saving throw', () => {
        // Arrange
        const data = {
            strength_save: 1,
            dexterity_save: 2,
            constitution_save: 3,
            intelligence_save: null,
            wisdom_save: 5,
            charisma_save: 6,
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.getByText('Saving Throws')).toBeInTheDocument();
        expect(screen.getByText('STR +1')).toBeInTheDocument();
        expect(screen.getByText('DEX +2')).toBeInTheDocument();
        expect(screen.getByText('CON +3')).toBeInTheDocument();
        expect(screen.queryByText('INT')).not.toBeInTheDocument();
        expect(screen.getByText('WIS +5')).toBeInTheDocument();
        expect(screen.getByText('CHA +6')).toBeInTheDocument();
    });

    it('should render the other saving throws with no value in wisdom saving throw', () => {
        // Arrange
        const data = {
            strength_save: 1,
            dexterity_save: 2,
            constitution_save: 3,
            intelligence_save: 4,
            wisdom_save: null,
            charisma_save: 6,
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.getByText('Saving Throws')).toBeInTheDocument();
        expect(screen.getByText('STR +1')).toBeInTheDocument();
        expect(screen.getByText('DEX +2')).toBeInTheDocument();
        expect(screen.getByText('CON +3')).toBeInTheDocument();
        expect(screen.getByText('INT +4')).toBeInTheDocument();
        expect(screen.queryByText('WIS')).not.toBeInTheDocument();
        expect(screen.getByText('CHA +6')).toBeInTheDocument();
    });

    it('should render the other saving throws with no value in charisma saving throw', () => {
        // Arrange
        const data = {
            strength_save: 1,
            dexterity_save: 2,
            constitution_save: 3,
            intelligence_save: 4,
            wisdom_save: 5,
            charisma_save: null,
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.getByText('Saving Throws')).toBeInTheDocument();
        expect(screen.getByText('STR +1')).toBeInTheDocument();
        expect(screen.getByText('DEX +2')).toBeInTheDocument();
        expect(screen.getByText('CON +3')).toBeInTheDocument();
        expect(screen.getByText('INT +4')).toBeInTheDocument();
        expect(screen.getByText('WIS +5')).toBeInTheDocument();
        expect(screen.queryByText('CHA')).not.toBeInTheDocument();
    });

    it('should not render saving throws if no saving throws are present', () => {
        // Arrange
        const data = {
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.queryByText('Saving Throws', { selector: 'span' })).not.toBeInTheDocument();
    });

    it('should not render skills if no skills are present', () => {
        // Arrange
        const data = {
            strength_save: 1,
            dexterity_save: 2,
            constitution_save: 3,
            intelligence_save: 4,
            wisdom_save: 5,
            charisma_save: 6,
            skills: {},
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.queryByText('Skills', { selector: 'span' })).not.toBeInTheDocument();
    });

    it('should not render damage vulnerabilities if no damage vulnerabilities are present', () => {
        // Arrange
        const data = {
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: '',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(
            screen.queryByText('Damage Vulnerabilities', { selector: 'span' }),
        ).not.toBeInTheDocument();
    });

    it('should not render damage resistances if no damage resistances are present', () => {
        // Arrange
        const data = {
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: '',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(
            screen.queryByText('Damage Resistances', { selector: 'span' }),
        ).not.toBeInTheDocument();
    });

    it('should not render damage immunities if no damage immunities are present', () => {
        // Arrange
        const data = {
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: '',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(
            screen.queryByText('Damage Immunities', { selector: 'span' }),
        ).not.toBeInTheDocument();
    });

    it('should not render condition immunities if no condition immunities are present', () => {
        // Arrange
        const data = {
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: '',
            senses: 'darkvision 60 ft.',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(
            screen.queryByText('Condition Immunities', { selector: 'span' }),
        ).not.toBeInTheDocument();
    });

    it('should not render senses if no senses are present', () => {
        // Arrange
        const data = {
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: '',
            languages: 'Common, Primordial, Draconic',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.queryByText('Senses', { selector: 'span' })).not.toBeInTheDocument();
    });

    it('should not render languages if no languages are present', () => {
        // Arrange
        const data = {
            skills: {
                acrobatics: 1,
            },
            damage_vulnerabilities: 'fire',
            damage_resistances: 'acid',
            damage_immunities: 'cold',
            condition_immunities: 'frightened',
            senses: 'darkvision 60 ft.',
            languages: '',
            challenge_rating: '21',
        };

        // Act
        render(<Attributes data={data} />);

        // Assert
        expect(screen.queryByText('Languages', { selector: 'span' })).not.toBeInTheDocument();
    });
});
