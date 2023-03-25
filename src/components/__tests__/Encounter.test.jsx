import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import Encounter from '../Encounter';
import { getMonstersFromAPI } from '../utilities/API';

vi.mock('../utilities/API');

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
		act(() => {
			render(<Encounter />);
		});

		// Assert
		await act(() => {
			waitFor(() => {
				expect(screen.getByText('Goblin')).toBeInTheDocument();
			});
		});
	});

	it('renders error message when api responds without data', async () => {
		// Arrange
		getMonstersFromAPI.mockResolvedValue({});

		// Act
		act(() => {
			render(<Encounter />);
		});

		// Assert
		await act(() => {
			waitFor(() => {
				expect(screen.getByText('Unable to retrieve data')).toBeInTheDocument();
			});
		});
	});
});
