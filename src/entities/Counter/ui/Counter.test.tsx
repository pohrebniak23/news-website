import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from '../../../shared/lib/test/renderComponent/renderComponent';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Test for label to have counter value', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 5 } },
    });

    expect(screen.getByTestId('counter-label')).toHaveTextContent('5');
  });

  test('Test for counter increment', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 5 } },
    });

    fireEvent.click(screen.getByTestId('counter-increment'));
    expect(screen.getByTestId('counter-label')).toHaveTextContent('6');
  });

  test('Test for counter decrement', () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 5 } },
    });

    fireEvent.click(screen.getByTestId('counter-decrement'));
    expect(screen.getByTestId('counter-label')).toHaveTextContent('4');
  });
});
