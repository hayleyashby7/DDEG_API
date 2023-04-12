import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '../Select';

describe('Select component', () => {
    const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];

    it('renders the select', () => {
        // Arrange
        const { container } = render(<Select options={options} />);

        // Assert
        expect(container).toMatchSnapshot();
    });

    it('should render the options', () => {
        // Act
        render(<Select options={options} />);

        // Assert
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('should select the option', async () => {
        // Arrange
        const user = userEvent.setup();

        // Act
        render(<Select options={options} />);

        // Assert
        await user.selectOptions(screen.getByRole('combobox'), '2');
        expect(screen.getByRole('combobox').value).toBe('2');
    });
});
