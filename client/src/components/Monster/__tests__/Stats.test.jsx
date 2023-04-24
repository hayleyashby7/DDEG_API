import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Stats from '../Stats';

describe('Stats component', () => {
    it('should render the component', () => {
        // Act
        render(
            <Stats
                data={{
                    strength: 8,
                    dexterity: 9,
                    constitution: 18,
                    intelligence: 20,
                    wisdom: 13,
                    charisma: 11,
                }}
            />,
        );

        // Assert
        expect(screen.getByText('STR')).toBeInTheDocument();
        expect(screen.getByText('8')).toBeInTheDocument();
        expect(screen.getByText('DEX')).toBeInTheDocument();
        expect(screen.getByText('9')).toBeInTheDocument();
        expect(screen.getByText('CON')).toBeInTheDocument();
        expect(screen.getByText('18')).toBeInTheDocument();
        expect(screen.getByText('INT')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
        expect(screen.getByText('WIS')).toBeInTheDocument();
        expect(screen.getByText('13')).toBeInTheDocument();
        expect(screen.getByText('CHA')).toBeInTheDocument();
        expect(screen.getByText('11')).toBeInTheDocument();
    });
});
