import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import LegendaryActions from '../LegendaryActions';

describe('LegendaryActions component', () => {
    it('should render the component', () => {
        // Act
        render(
            <LegendaryActions
                data={{
                    legendary_actions: [
                        {
                            name: 'Detect',
                            desc: 'The dragon makes a Wisdom (Perception) check.',
                        },
                        {
                            name: 'Tail Attack',
                            desc: 'The dragon makes a tail attack.',
                        },
                    ],
                }}
            />,
        );

        // Assert
        expect(screen.getByText('Detect')).toBeInTheDocument();
        expect(
            screen.getByText('The dragon makes a Wisdom (Perception) check.'),
        ).toBeInTheDocument();
        expect(screen.getByText('Tail Attack')).toBeInTheDocument();
        expect(screen.getByText('The dragon makes a tail attack.')).toBeInTheDocument();
    });
});
