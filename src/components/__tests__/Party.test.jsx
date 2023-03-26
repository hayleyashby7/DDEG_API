import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Party from '../Party';

describe('Party component', () => {
	it('renders the party composition form', () => {
		// Arrange
		const { container } = render(<Party />);

		//Assert
		expect(container).toMatchSnapshot();
	});

	it('form validation rejects number of characters outside of 1-10 values', async () => {
		// Arrange
		const user = userEvent.setup();

		render(<Party />);

		const input = screen.getByLabelText('Number of characters');

		// Act
		await user.type(input, '25');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(input).toBeInvalid();
			});
		});
	});

	it('form validation accepts number of characters inside of 1-10 values', async () => {
		// Arrange
		const user = userEvent.setup();

		render(<Party />);

		const input = screen.getByLabelText('Number of characters');

		// Act
		await user.type(input, '5');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(input).toBeValid();
			});
		});
	});

	it('form validation rejects character level outside of 1-20 values', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party />);
		const input = screen.getByLabelText('Level (1-20)');

		// Act
		await user.type(input, '68');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(input).toBeInvalid();
			});
		});
	});

	it('form validation accepts character level inside of 1-20 values', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party />);
		const input = screen.getByLabelText('Level (1-20)');

		// Act
		await user.type(input, '13');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(input).toBeValid();
			});
		});
	});

	it('form validation accepts an Easy encounter difficulty', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party />);
		const difficulty = screen.getByLabelText('Difficulty');

		// Act
		await user.type(difficulty, 'Easy');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(difficulty).toBeValid();
			});
		});
	});

	it('form validation accepts a Medium encounter difficulty', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party />);
		const difficulty = screen.getByLabelText('Difficulty');

		// Act
		await user.type(difficulty, 'Medium');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(difficulty).toBeValid();
			});
		});
	});

	it('form validation accepts a Hard encounter difficulty', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party />);
		const difficulty = screen.getByLabelText('Difficulty');

		// Act
		await user.type(difficulty, 'Hard');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(difficulty).toBeValid();
			});
		});
	});

	it('form validation accepts a Deadly encounter difficulty', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party />);
		const difficulty = screen.getByLabelText('Difficulty');

		// Act
		await user.type(difficulty, 'Deadly');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(difficulty).toBeValid();
			});
		});
	});

	it('form validation rejects an invalid encounter difficulty', async () => {
		// Arrange
		const user = userEvent.setup();
		render(<Party />);
		const difficulty = screen.getByLabelText('Difficulty');

		// Act
		await user.type(difficulty, 'SuperDuperReallyChallenging');

		//Assert
		await act(() => {
			waitFor(() => {
				expect(difficulty).toBeInvalid();
			});
		});
	});
});
