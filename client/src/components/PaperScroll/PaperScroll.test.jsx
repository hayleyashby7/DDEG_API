import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import PaperScroll from './PaperScroll';

describe('PaperScroll component', () => {
    it('renders component', () => {
        // Arrange
        const contents = <div>Test</div>;

        // Act
        const { container } = render(<PaperScroll contents={contents} />);

        // Assert
        expect(container).toMatchSnapshot();
    });

    it('renders component with contents', () => {
        // Arrange
        const contents = <div>Test</div>;

        // Act
        render(<PaperScroll contents={contents} />);

        // Assert
        expect(screen.getByText(/Test/i)).toBeInTheDocument();
    });
});
