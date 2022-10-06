import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nTests from 'shared/config/i18n/i18nTests';
import { DeepPartial } from '@reduxjs/toolkit';

interface RenderComponentOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function renderComponent(
  component: ReactNode,
  options: RenderComponentOptions = {},
) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
