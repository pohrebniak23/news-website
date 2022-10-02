import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/test/renderComponent/renderComponent';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  test('Test for ', () => {
    renderComponent(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
