import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Special from '../Special';

describe('Special component', () => {
    it('should render the component', () => {
        // Act
        render(
            <Special
                data={{
                    special_abilities: [
                        {
                            name: 'Keen Hearing and Smell',
                            desc: 'The goblin has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
                        },
                        {
                            name: 'Sunlight Sensitivity',
                            desc: 'While in sunlight, the goblin has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.',
                        },
                    ],
                }}
            />,
        );

        // Assert
        expect(screen.getByText('Keen Hearing and Smell')).toBeInTheDocument();
        expect(
            screen.getByText(
                'The goblin has advantage on Wisdom (Perception) checks that rely on hearing or smell.',
            ),
        ).toBeInTheDocument();
        expect(screen.getByText('Sunlight Sensitivity')).toBeInTheDocument();
        expect(
            screen.getByText(
                'While in sunlight, the goblin has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.',
            ),
        ).toBeInTheDocument();
    });
});
