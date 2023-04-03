/* eslint-disable no-promise-executor-return */
/* eslint-disable import/no-extraneous-dependencies */

import * as nodeFetch from 'node-fetch';
import { Response } from 'node-fetch';
import { describe, it, expect, vi } from 'vitest';
import { getMonstersFromAPI } from '../API';

vi.mock('node-fetch', async () => {
    const actual = await vi.importActual('node-fetch');

    return {
        ...actual,
        default: vi.fn(),
    };
});

const fetch = vi.mocked(nodeFetch.default);

describe('API', () => {
    it('getMonstersFromAPI returns expected monsters and error value', async () => {
        // Arrange
        const mockData = {
            monsters: [
                {
                    slug: 'goblin',
                    name: 'Goblin',
                },
            ],
            error: false,
        };

        fetch.mockImplementation(async () => new Response(JSON.stringify(mockData)));

        // Act
        const data = await getMonstersFromAPI(3);

        // Assert
        expect(data).toEqual(mockData);
    });
});
