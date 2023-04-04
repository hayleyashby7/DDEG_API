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
                count: 2,
                results: [
                    { slug: 'goblin', name: 'Goblin' },
                    { slug: 'orc', name: 'Orc' },
                ],
            }),
        );

        // Act
        render(<Encounter challengeRating={1} />);

        // Assert
        // Heading is displayed
        expect(screen.getByRole('heading')).toHaveTextContent(/List of Monsters/i);

        // Mocked data is displayed
        expect(await screen.findByText(/Goblin/i)).toBeInTheDocument();
        expect(await screen.findByText(/Orc/i)).toBeInTheDocument();

        // No error message is displayed
        expect(screen.queryByText(/No monsters found/i)).not.toBeInTheDocument();
    });

    it('should show an error message with a failed API call', async () => {
        // Arrange

        // Mock the API call
        getMonstersFromAPI.mockReturnValue(Promise.reject(new Error('API call failed')));

        // Act
        render(<Encounter challengeRating={1} />);

        // Assert
        // Heading is still displayed
        expect(screen.getByRole('heading')).toHaveTextContent(/List of Monsters/i);

        // Error message is displayed
        expect(await screen.findByText(/API call failed/i)).toBeInTheDocument();

        // Mocked data is not displayed
        expect(screen.queryByText(/Goblin/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Orc/i)).not.toBeInTheDocument();
    });

    it('should render a message to advise if no data recieved on a successful API call', async () => {
        // Arrange

        // Mock the API call
        getMonstersFromAPI.mockReturnValue(
            Promise.resolve({
                count: 0,
                results: [],
            }),
        );

        // Act
        render(<Encounter challengeRating={1} />);

        // Assert
        // Heading is displayed
        expect(screen.getByRole('heading')).toHaveTextContent(/List of Monsters/i);

        // Error message is displayed
        expect(await screen.findByText(/No suitable monsters found./i)).toBeInTheDocument();

        // Mocked data is not displayed
        expect(screen.queryByText(/Goblin/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Orc/i)).not.toBeInTheDocument();
    });
});
