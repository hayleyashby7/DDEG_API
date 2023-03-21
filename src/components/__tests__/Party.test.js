import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Party from '../Party';

describe('Party component', () => {
	it('renders the party composition form', () => {
		// Arrange
		const { container } = render(<Party />);

		//Assert
		expect(container).toMatchSnapshot();
	});

	it('calls onSubmit when Submit button is pressed', async () => {
		// Arrange
		const onSubmitMock = jest.fn();
		const user = userEvent.setup();
		render(<Party onSubmit={onSubmitMock} />);
		const button = screen.getByRole('button', { name: 'Submit' });

		// Act
		await user.click(button);

		//Assert
		expect(onSubmitMock).toHaveBeenCalledTimes(1);
	});

	it('form validation rejects number of characters outside of 1-10 values', async () => {
		// Arrange
		const onSubmitMock = jest.fn();
		const user = userEvent.setup();
		render(<Party onSubmit={onSubmitMock} />);
		const button = screen.getByRole('button', { name: 'Submit' });
		const input = screen.getByLabelText('Characters (Max 10)');

		// Act
		await user.type(input, '25');
		await user.click(button);

		//Asser
		expect(input).toBeInvalid();
	});

	it('form validation  rejects character level outside of 1-20 values', async () => {
		// Arrange
		const onSubmitMock = jest.fn();
		const user = userEvent.setup();
		render(<Party onSubmit={onSubmitMock} />);
		const button = screen.getByRole('button', { name: 'Submit' });
		const input = screen.getByLabelText('Level (1-20)');

		// Act
		await user.type(input, '68');
		await user.click(button);

		//Asser
		expect(input).toBeInvalid();
	});
});
