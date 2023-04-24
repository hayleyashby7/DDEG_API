import { it, describe, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import Expanded from '../Expanded';

vi.mock('../../Monster/Monster');

describe('Expanded', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the component', async () => {
        // Arrange
        const mockMonster = await import('../../Monster/Monster');
        mockMonster.default.mockImplementation(() => <div>Monster</div>);
        const tbody = document.createElement('tbody');

        // Act
        const { container } = render(<Expanded data={{}} colSpan={1} />, {
            container: document.body.appendChild(tbody),
            baseElement: document.body,
        });

        // Assert
        expect(container).toMatchSnapshot();
        expect(mockMonster.default).toHaveBeenCalledTimes(1);
    });
});
