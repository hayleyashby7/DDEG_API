import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';

describe('Hero component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it('renders the component', () => {
        // Arrange
        const mockClickCB = vi.fn();
        const { container } = render(<Hero clickCB={mockClickCB} />);

        // Assert
        expect(container).toMatchSnapshot();
    });

    it('should call the clickCB function when the button is clicked', async () => {
        // Arrange
        const user = userEvent.setup();
        const mockClickCB = vi.fn();

        // Act
        render(<Hero clickCB={mockClickCB} />);

        await user.click(screen.getByRole('button', { name: 'Build Your Encounter' }));

        // Assert
        expect(mockClickCB).toBeCalled();
        expect(mockClickCB).toHaveBeenCalledTimes(1);
    });

    it('should minimise the hero component when the button is clicked', async () => {
        // Arrange
        const user = userEvent.setup();
        const mockClickCB = vi.fn();

        // Act
        render(<Hero clickCB={mockClickCB} />);

        await user.click(screen.getByRole('button', { name: 'Build Your Encounter' }));

        // Assert
        expect(
            screen.queryByRole('button', { name: 'Build Your Encounter' }),
        ).not.toBeInTheDocument();
        expect(screen.queryByText(/Take the stress out of being a DM/i)).not.toBeInTheDocument();
        expect(
            screen.queryByText(/Generate an encounter customised to YOUR party/i),
        ).not.toBeInTheDocument();
    });
});
