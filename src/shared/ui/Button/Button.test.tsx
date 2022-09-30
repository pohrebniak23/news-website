import { render, screen } from '@testing-library/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from './Button';

describe('Button', () => {
  test('Test for render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test for class', () => {
    render(
      <Button theme="theme-light" className="clear">
        Test
      </Button>,
    );
    expect(screen.getByText('Test')).toHaveClass('clear theme-light');
    screen.debug();
  });
});
