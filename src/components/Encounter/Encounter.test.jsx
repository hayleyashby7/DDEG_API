import { vi, it, describe, expect, afterEach } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Encounter from './Encounter';
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
                    {
                        slug: 'goblin',
                        name: 'Goblin',
                        challenge_rating: '1',
                        type: 'Humanoid',
                        size: 'Small',
                        alignment: 'Neutral',
                    },
                    {
                        slug: 'orc',
                        name: 'Orc',
                        challenge_rating: '1',
                        type: 'Humanoid',
                        size: 'Medium',
                        alignment: 'Chaotic',
                    },
                ],
            }),
        );

        // Act
        render(<Encounter challengeRating='1' />);

        // Assert
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
        render(<Encounter challengeRating='1' />);

        // Assert
        // Error message is displayed
        expect(await screen.findByText(/API call failed/i)).toBeInTheDocument();

        // Mocked data is not displayed
        expect(screen.queryByText(/Goblin/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Orc/i)).not.toBeInTheDocument();
    });

    it('should render a message to advise if API call resolves but an error is returned', async () => {
        // Arrange

        // Mock the API call
        getMonstersFromAPI.mockReturnValue(Promise.resolve(new Error('API call failed')));

        // Act
        render(<Encounter challengeRating='1' />);

        // Assert
        // Error message is displayed
        expect(
            await screen.findByText(
                /Unable to retrieve monsters from server. Please try again later./i,
            ),
        ).toBeInTheDocument();

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
        render(<Encounter challengeRating='1' />);

        // Assert
        // Error message is displayed
        expect(await screen.findByText(/No suitable monsters found./i)).toBeInTheDocument();

        // Mocked data is not displayed
        expect(screen.queryByText(/Goblin/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Orc/i)).not.toBeInTheDocument();
    });

    it('should not make API call if no challenge rating passed to component', async () => {
        // Arrange

        // Mock the API call
        getMonstersFromAPI.mockReturnValue(
            Promise.resolve({
                count: 2,
                results: [
                    {
                        slug: 'goblin',
                        name: 'Goblin',
                        challenge_rating: '1',
                        type: 'Humanoid',
                        size: 'Small',
                        alignment: 'Neutral',
                    },
                    {
                        slug: 'orc',
                        name: 'Orc',
                        challenge_rating: '1',
                        type: 'Humanoid',
                        size: 'Medium',
                        alignment: 'Chaotic',
                    },
                ],
            }),
        );

        // Act
        render(<Encounter />);

        // Assert
        // Error message is displayed
        expect(await screen.findByText(/Unable to request data./i)).toBeInTheDocument();

        // Mocked data is not displayed
        expect(screen.queryByText(/Goblin/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Orc/i)).not.toBeInTheDocument();
    });
});
