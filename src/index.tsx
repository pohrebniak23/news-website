import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/contexts';
import { App } from './app/App';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';

if (localStorage.getItem('i18nextLng') === null) {
  localStorage.setItem('i18nextLng', 'en');
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
