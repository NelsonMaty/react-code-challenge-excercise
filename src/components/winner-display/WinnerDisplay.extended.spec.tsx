import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay.extended';

describe('WinnerDisplayExtended', () => {
  it('renders the winner text correctly', () => {
    render(<WinnerDisplay text="test" />);

    const winnerText = screen.getByText('test wins!');
    expect(winnerText).toBeInTheDocument();
  });
});
