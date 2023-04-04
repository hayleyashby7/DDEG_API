import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Party from '../Party';

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
        await user.type(screen.getByLabelText('Difficulty'), 'Easy');

        await user.click(screen.getByRole('button', { name: 'Submit' }));

        // Assert
        expect(mockSaveData).toBeCalled();
    });

});
