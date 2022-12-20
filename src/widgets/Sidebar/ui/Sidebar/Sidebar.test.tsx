import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/test/renderComponent/renderComponent';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('Test for ', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test for toggle', () => {
    renderComponent(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
