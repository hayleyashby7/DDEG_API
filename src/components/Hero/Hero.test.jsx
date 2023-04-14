import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero component', () => {
    it('renders the component', () => {
        // Arrange
        const { container } = render(<Hero />);

        // Assert
        expect(container).toMatchSnapshot();
    });
});
