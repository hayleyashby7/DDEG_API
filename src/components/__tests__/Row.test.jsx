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
            challenge_rating: '1',
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
        // Basic row data should be rendered
        expect(screen.getByText('Goblin', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('1', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Humanoid', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Small', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Neutral', { selector: 'td' })).toBeInTheDocument();

        // Exanded row should not be rendered
        expect(
            screen.queryByRole('cell', { name: /Goblin 1 Humanoid Small Neutral/i }),
        ).not.toBeInTheDocument();
    });

    it('should render an expanded row with data', async () => {
        // Arrange
        const rowKey = 'goblin';
        const data = {
            name: 'Goblin',
            challenge_rating: '1',
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
        // Basic row data should be rendered
        expect(screen.getByText('Goblin', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('1', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Humanoid', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Small', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Neutral', { selector: 'td' })).toBeInTheDocument();

        // Exanded row should be rendered
        expect(
            screen.getByRole('cell', { name: /Goblin 1 Humanoid Small Neutral/i }),
        ).toBeInTheDocument();
    });
});
