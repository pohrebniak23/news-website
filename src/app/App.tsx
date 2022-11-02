import { UserActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/RouterProvider';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);

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
