import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Actions from '../Actions';

describe('Actions component', () => {
    it('should render the component', () => {
        // Act
        render(
            <Actions
                data={{
                    actions: [
                        {
                            name: 'Multiattack',
                            desc: 'The goblin makes two scimitar attacks.',
                            attack_bonus: 2,
                            damage: [
                                {
                                    damage_dice: '1d6',
                                    damage_type: {
                                        name: 'slashing',
                                    },
                                },
                            ],
                        },
                        {
                            name: 'Scimitar',
                            desc: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6 + 1) slashing damage.',
                            attack_bonus: 2,
                            damage: [
                                {
                                    damage_dice: '1d6',
                                    damage_type: {
                                        name: 'slashing',
                                    },
                                },
                            ],
                        },
                    ],
                }}
            />,
        );

        // Assert
        expect(screen.getByText('Multiattack')).toBeInTheDocument();
        expect(screen.getByText('The goblin makes two scimitar attacks.')).toBeInTheDocument();
        expect(screen.getByText('Scimitar')).toBeInTheDocument();
        expect(
            screen.getByText(
                'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6 + 1) slashing damage.',
            ),
        ).toBeInTheDocument();
    });
});
