import { vi, it, describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Encounter from '../Encounter/Encounter';

describe('Encounter', () => {
    it('should render a list of monsters', async () => {
        // Arrange

        // Mock the API call
        vi.mock('../../utils/API', async (importOriginal) => {
            const mod = await importOriginal();
            return {
                ...mod,
                getMonstersFromAPI: vi.fn(() =>
                    Promise.resolve({
                        results: [
                            { slug: 'goblin', name: 'Goblin' },
                            { slug: 'orc', name: 'Orc' },
                        ],
                    }),
                ),
            };
        });

        // Act
        render(<Encounter />);

        // Assert
        // Heading is displayed
        expect(screen.getByRole('heading')).toHaveTextContent('List of Monsters');

        // Mocked data is displayed
        expect(await screen.findByText('Goblin')).toBeInTheDocument();
        expect(await screen.findByText('Orc')).toBeInTheDocument();

        // No error message is displayed
        expect(screen.queryByText('No monsters found')).not.toBeInTheDocument();
    });
});
