import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the button', () => {
        // Arrange
        const { container } = render(<Button />);

        // Assert
        expect(container).toMatchSnapshot();
    });

    it('should render a button with the label passed in', () => {
        // Arrange
        const label = 'Test label';

        // Act
        render(<Button label={label} />);

        // Assert
        expect(screen.getByRole('button')).toHaveTextContent(label);
    });

    it('should render a button with the correct type', () => {
        // Arrange
        const type = 'submit';

        // Act
        render(<Button type={type} />);

        // Assert
        expect(screen.getByRole('button')).toHaveAttribute('type', type);
    });

    it('should call the onClick function when the button is clicked', async () => {
        // Arrange
        const mockOnClick = vi.fn();
        const type = 'button';
        const label = 'Test label';
        const user = userEvent.setup();

        render(<Button type={type} label={label} onClick={mockOnClick} />);

        // Act
        await user.click(screen.getByRole('button'));

        // Assert
        expect(mockOnClick).toBeCalled();
        expect(mockOnClick).toBeCalledTimes(1);
    });
});
