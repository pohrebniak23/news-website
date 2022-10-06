import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/RouterProvider';

export const App = () => {
  return (
    <div className="app">
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
