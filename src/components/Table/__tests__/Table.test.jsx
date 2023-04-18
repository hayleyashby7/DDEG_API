import { it, describe, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';

vi.mock('../Row');

const headers = [
    { name: 'Name', data: 'name', important: true },
    { name: 'Challenge Rating', data: 'challenge_rating', important: true },
    { name: 'Type', data: 'type', important: false },
    { name: 'Size', data: 'size', important: false },
    { name: 'Alignment', data: 'alignment', important: false },
    { name: '', data: null, important: true },
];

describe('Table', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the component', async () => {
        // Arrange
        const testData = [
            {
                name: 'Goblin',
                slug: 'goblin',
                challenge_rating: '1',
                type: 'Humanoid',
                size: 'Small',
                alignment: 'Neutral',
            },
        ];
        const mockRow = await import('../Row');
        mockRow.default.mockImplementation(() => (
            <tr>
                <td>Row</td>
            </tr>
        ));

        // Act
        const { container } = render(<Table headers={headers} data={testData} />);

        // Assert
        expect(container).toMatchSnapshot();
    });

    it('should render the correct headers', async () => {
        // Arrange
        const testData = [
            {
                name: 'Goblin',
                slug: 'goblin',
                challenge_rating: '1',
                type: 'Humanoid',
                size: 'Small',
                alignment: 'Neutral',
            },
        ];
        const mockRow = await import('../Row');
        mockRow.default.mockImplementation(() => (
            <tr>
                <td>Row</td>
            </tr>
        ));

        // Act
        render(<Table headers={headers} data={testData} />);

        // Assert
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Challenge Rating')).toBeInTheDocument();
        expect(screen.getByText('Type')).toBeInTheDocument();
        expect(screen.getByText('Size')).toBeInTheDocument();
        expect(screen.getByText('Alignment')).toBeInTheDocument();
    });

    it('should render the correct number of rows', async () => {
        // Arrange
        const testData = [
            {
                name: 'Goblin',
                slug: 'goblin',
                challenge_rating: '1',
                type: 'Humanoid',
                size: 'Small',
                alignment: 'Neutral',
            },
            {
                name: 'Orc',
                slug: 'orc',
                challenge_rating: '1/2',
                type: 'Humanoid',
                size: 'Medium',
                alignment: 'Chaotic Evil',
            },
        ];
        const mockRow = await import('../Row');
        mockRow.default.mockImplementation(() => (
            <tr>
                <td>Row</td>
            </tr>
        ));

        // Act
        render(<Table headers={headers} data={testData} />);

        // Assert
        expect(mockRow.default).toHaveBeenCalledTimes(2);
        expect(mockRow.default).toHaveBeenCalledWith(
            { data: testData[0], cols: headers.length },
            {},
        );
        expect(mockRow.default).toHaveBeenCalledWith(
            { data: testData[1], cols: headers.length },
            {},
        );
    });
});
