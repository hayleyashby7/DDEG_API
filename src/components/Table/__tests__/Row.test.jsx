import { it, describe, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Row from '../Row';

vi.mock('../Expanded');

describe('Row', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render a row with data', async () => {
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
        const mockExpanded = await import('../Expanded');
        mockExpanded.default.mockImplementation(() => (
            <tr>
                <td>Expanded</td>
            </tr>
        ));

        // Act
        render(<Row key={rowKey} data={data} cols={5} />, {
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
        expect(screen.queryByRole('cell', { name: /Expanded/i })).not.toBeInTheDocument();
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
        const mockExpanded = await import('../Expanded');
        mockExpanded.default.mockImplementation(() => (
            <tr>
                <td>Expanded</td>
            </tr>
        ));

        // Act
        render(<Row key={rowKey} data={data} cols={5} />, {
            container: document.body.appendChild(tbody),
            baseElement: document.body,
        });

        expect(mockExpanded.default).toHaveBeenCalledTimes(0);

        await user.click(screen.getByTitle(/Expand/i));

        // Assert
        // Basic row data should be rendered
        expect(screen.getByText('Goblin', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('1', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Humanoid', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Small', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Neutral', { selector: 'td' })).toBeInTheDocument();

        // Exanded row should be rendered
        expect(screen.getByRole('cell', { name: /Expanded/i })).toBeInTheDocument();
        expect(mockExpanded.default).toHaveBeenCalledTimes(1);
    });

    it('should remove expanded row when clicked again', async () => {
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
        const mockExpanded = await import('../Expanded');
        mockExpanded.default.mockImplementation(() => (
            <tr>
                <td>Expanded</td>
            </tr>
        ));

        // Act
        render(<Row key={rowKey} data={data} cols={5} />, {
            container: document.body.appendChild(tbody),
            baseElement: document.body,
        });

        expect(mockExpanded.default).toHaveBeenCalledTimes(0);
        await user.click(screen.getByTitle(/Expand/i));

        //  Check data after first click to expand
        expect(screen.getByText('Goblin', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('1', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Humanoid', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Small', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Neutral', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: /Expanded/i })).toBeInTheDocument();
        expect(mockExpanded.default).toHaveBeenCalledTimes(1);

        // Click again to collapse
        await user.click(screen.getByTitle(/Expand/i));

        // Assert
        // Basic row data should be rendered
        expect(screen.getByText('Goblin', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('1', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Humanoid', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Small', { selector: 'td' })).toBeInTheDocument();
        expect(screen.getByText('Neutral', { selector: 'td' })).toBeInTheDocument();

        // Exanded row should not be rendered
        expect(screen.queryByRole('cell', { name: /Expanded/i })).not.toBeInTheDocument();
        expect(mockExpanded.default).toHaveBeenCalledTimes(1);
    });
});
