import { it, describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Row from '../Table/Row';

describe('Row', () => {
    it('should render a row with data', () => {
        // Arrange
        const rowKey = 'goblin';
        const data = {
            name: 'Goblin',
            challenge_rating: 1,
            type: 'Humanoid',
            size: 'Small',
            alignment: 'Neutral',
        };
        const tbody = document.createElement('tbody');

        // Act
        render(<Row rowKey={rowKey} data={data} />, {
            container: document.body.appendChild(tbody),
            baseElement: document.body,
        });

        // Assert
        expect(screen.getByText(/Goblin/i)).toBeInTheDocument();
        expect(screen.getByText(/1/i)).toBeInTheDocument();
        expect(screen.getByText(/Humanoid/i)).toBeInTheDocument();
        expect(screen.getByText(/Small/i)).toBeInTheDocument();
        expect(screen.getByText(/Neutral/i)).toBeInTheDocument();
    });

    it('should render an expanded row with data', async () => {
        // Arrange
        const rowKey = 'goblin';
        const data = {
            name: 'Goblin',
            challenge_rating: 1,
            type: 'Humanoid',
            size: 'Small',
            alignment: 'Neutral',
        };
        const user = userEvent.setup();
        const tbody = document.createElement('tbody');

        // Act
        render(<Row rowKey={rowKey} data={data} />, {
            container: document.body.appendChild(tbody),
            baseElement: document.body,
        });
        await user.click(screen.getByText(/Goblin/i));

        // Assert
        expect(screen.getByText(/Goblin/i)).toBeInTheDocument();
        expect(screen.getByText(/1/i)).toBeInTheDocument();
        expect(screen.getByText(/Humanoid/i)).toBeInTheDocument();
        expect(screen.getByText(/Small/i)).toBeInTheDocument();
        expect(screen.getByText(/Neutral/i)).toBeInTheDocument();
        expect(screen.getByText(/Expanded/i)).toBeInTheDocument();
    });
});
