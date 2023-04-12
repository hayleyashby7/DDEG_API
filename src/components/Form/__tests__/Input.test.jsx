import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';

describe('Input component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the input', () => {
        // Arrange
        const { container } = render(<Input />);

        // Assert
        expect(container).toMatchSnapshot();
    });

    it('should render an input with the label and name passed in', () => {
        // Arrange
        const label = 'Test label';
        const name = 'test-name';

        // Act
        render(<Input label={label} name={name} />);

        // Assert
        expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    it('should render an input with the correct type', () => {
        // Arrange
        const type = 'text';

        // Act
        render(<Input type={type} />);

        // Assert
        expect(screen.getByRole('textbox')).toHaveAttribute('type', type);
    });

    it('should call the onChange function when the input is changed', async () => {
        // Arrange
        const mockOnChange = vi.fn();
        const type = 'text';
        const label = 'Test label';
        const name = 'test-name';
        const user = userEvent.setup();

        render(<Input type={type} label={label} name={name} onChange={mockOnChange} />);

        // Act
        await user.type(screen.getByLabelText(label), 'Test');

        // Assert
        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toBeCalledTimes(4);
    });
});
