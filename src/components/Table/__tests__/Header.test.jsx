import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    it('should render the header cell', () => {
        // Act
        render(<Header header={{ name: 'Name', important: true }} />);

        // Assert
        expect(screen.getByText('Name')).toBeInTheDocument();
    });
});
