import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Encounter from '../Encounter';
import { getMonstersFromAPI } from '../utilities/API';

vi.mock('../API');

describe('Encounter Component', () => {
	// Clear the mock after each test
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('renders monster names when api responds successfully', async () => {
		// Arrange
		getMonstersFromAPI.mockResolvedValue({
			results: [{ slug: 'goblin', name: 'Goblin' }],
		});

		// Act
		render(<Encounter />);

		// Assert
		await waitFor(() => {
			screen.getByText('Goblin');
		});
	});

	it('renders error message when api responds with a failure', async () => {
		// Arrange
		getMonstersFromAPI.mockResolvedValue({});

		// Act
		render(<Encounter />);

		// Assert
		await waitFor(() => {
			screen.getByText('Unable to retrieve data');
		});
	});
});
