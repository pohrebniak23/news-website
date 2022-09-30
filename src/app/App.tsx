import classNames from 'classnames';
import { Suspense } from 'react';
import { useTheme } from 'shared/contexts';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true }, theme)}>
      <Suspense fallback="">
        <Navbar />

        <div className="content">
          <Sidebar />

          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};
