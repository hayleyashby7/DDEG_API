import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Party from './Party';
import Difficulty from '../../utils/difficulty';

describe('Party component', () => {
    it('renders the party composition form', () => {
        // Arrange
        const { container } = render(<Party />);

        // Assert
        expect(container).toMatchSnapshot();
    });

    it('should successfully validate form with valid inputs', async () => {
        // Arrange
        const user = userEvent.setup();
        const mockSaveData = vi.fn();

        // Act
        render(<Party saveData={mockSaveData} />);

        await user.type(screen.getByLabelText('Number of characters'), '4');
        await user.type(screen.getByLabelText('Level'), '10');
        await userEvent.selectOptions(screen.getByLabelText('Difficulty'), 'Easy');

        await user.click(screen.getByRole('button', { name: 'Generate' }));

        // Assert
        expect(screen.getByLabelText('Number of characters')).toHaveValue(4);
        expect(screen.getByLabelText('Level')).toHaveValue(10);
        expect(screen.getByLabelText('Difficulty')).toHaveValue('Easy');
        expect(Difficulty.difficultyType(screen.getByLabelText('Difficulty').value)).toBe(true);

        expect(mockSaveData).toBeCalled();
        expect(screen.queryByText('Max 10', { selector: 'p' })).not.toBeInTheDocument();
        expect(screen.queryByText('Max 20', { selector: 'p' })).not.toBeInTheDocument();
    });

    it('should not validate form with invalid number of characters', async () => {
        // Arrange
        const user = userEvent.setup();
        const mockSaveData = vi.fn();

        // Act
        render(<Party saveData={mockSaveData} />);

        await user.type(screen.getByLabelText('Number of characters'), '800');
        await user.type(screen.getByLabelText('Level'), '10');
        await userEvent.selectOptions(screen.getByLabelText('Difficulty'), 'Easy');

        await user.click(screen.getByRole('button', { name: 'Generate' }));

        // Assert
        expect(mockSaveData).not.toBeCalled();
        expect(screen.getByText('Max 10', { selector: 'p' })).toBeInTheDocument();
    });

    it('should not validate form with invalid character level', async () => {
        // Arrange
        const user = userEvent.setup();
        const mockSaveData = vi.fn();

        // Act
        render(<Party saveData={mockSaveData} />);

        await user.type(screen.getByLabelText('Number of characters'), '5');
        await user.type(screen.getByLabelText('Level'), '18510');
        await userEvent.selectOptions(screen.getByLabelText('Difficulty'), 'Easy');

        await user.click(screen.getByRole('button', { name: 'Generate' }));

        // Assert
        expect(mockSaveData).not.toBeCalled();
        expect(screen.getByText('Max 20', { selector: 'p' })).toBeInTheDocument();
    });

    it('should not validate form with invalid difficulty', async () => {
        // Arrange
        const user = userEvent.setup();
        const mockSaveData = vi.fn();

        // Act
        render(<Party saveData={mockSaveData} />);

        await user.type(screen.getByLabelText('Number of characters'), '5');
        await user.type(screen.getByLabelText('Level'), '10');

        await user.click(screen.getByRole('button', { name: 'Generate' }));

        // Assert
        expect(Difficulty.difficultyType(screen.getByLabelText('Difficulty').value)).toBe(false);
        expect(mockSaveData).not.toBeCalled();
        expect(screen.getByText('Must select a difficulty', { selector: 'p' })).toBeInTheDocument();
    });

    it('should resubmit form if inputs are changed', async () => {
        // Arrange
        const user = userEvent.setup();
        const mockSaveData = vi.fn();

        // Act
        render(<Party saveData={mockSaveData} />);

        await user.type(screen.getByLabelText('Number of characters'), '4');
        await user.type(screen.getByLabelText('Level'), '10');
        await userEvent.selectOptions(screen.getByLabelText('Difficulty'), 'Easy');

        await user.click(screen.getByRole('button', { name: 'Generate' }));

        expect(screen.getByLabelText('Number of characters')).toHaveValue(4);
        expect(screen.getByLabelText('Level')).toHaveValue(10);
        expect(screen.getByLabelText('Difficulty')).toHaveValue('Easy');
        expect(Difficulty.difficultyType(screen.getByLabelText('Difficulty').value)).toBe(true);

        await user.type(screen.getByLabelText('Number of characters'), '[Backspace]5');
        await user.type(screen.getByLabelText('Level'), '[Backspace][Backspace]10');
        await userEvent.selectOptions(screen.getByLabelText('Difficulty'), 'Easy');

        await user.click(screen.getByRole('button', { name: 'Generate' }));

        // Assert
        expect(screen.getByLabelText('Number of characters')).toHaveValue(5);
        expect(screen.getByLabelText('Level')).toHaveValue(10);
        expect(screen.getByLabelText('Difficulty')).toHaveValue('Easy');
        expect(Difficulty.difficultyType(screen.getByLabelText('Difficulty').value)).toBe(true);

        expect(mockSaveData).toBeCalledTimes(2);
    });
});
