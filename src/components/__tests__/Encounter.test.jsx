import { vi, it, describe, expect, afterEach } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Encounter from '../Encounter/Encounter';
import { getMonstersFromAPI } from '../../utils/API';

vi.mock('../../utils/API');

describe('Encounter', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should render a list of monsters with successful API call', async () => {
        // Arrange

        // Mock the API call
        getMonstersFromAPI.mockReturnValue(
            Promise.resolve({
                results: [
                    { slug: 'goblin', name: 'Goblin' },
                    { slug: 'orc', name: 'Orc' },
                ],
            }),
        );

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
