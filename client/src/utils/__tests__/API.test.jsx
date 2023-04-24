import { vi, it, describe, expect, afterEach } from 'vitest';
import { getMonstersFromAPI } from '../API';

global.fetch = vi.fn();

describe('API', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should return a list of monsters from the API', async () => {
        // Arrange

        // Mock the fetch API
        fetch.mockReturnValue(
            Promise.resolve({
                json: () => ({
                    count: 2,
                    results: [
                        { slug: 'goblin', name: 'Goblin' },
                        { slug: 'orc', name: 'Orc' },
                    ],
                }),
            }),
        );

        // Act
        const monsters = await getMonstersFromAPI({ challengeRating: 1 });

        // Assert
        expect(monsters).toEqual({
            count: 2,
            results: [
                { slug: 'goblin', name: 'Goblin' },
                { slug: 'orc', name: 'Orc' },
            ],
        });
    });

    it('should throw an error if the API call fails', async () => {
        // Arrange

        // Mock the fetch API
        fetch.mockReturnValue(Promise.reject(new Error('API call failed')));

        // Act
        const monsters = getMonstersFromAPI({ challengeRating: 1 });

        // Assert
        await expect(monsters).rejects.toThrow('API call failed');
    });
});
