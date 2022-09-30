import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  test('Test for ', () => {
    renderWithTranslation(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
