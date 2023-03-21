import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Encounter from './Encounter';

describe('Encounter has correct header and content', () => {
	it('renders Encounter heading', () => {
		// Arrange
		const { container } = render(<Encounter />);

		// Assert
		expect(container).toMatchSnapshot();
	});
});
