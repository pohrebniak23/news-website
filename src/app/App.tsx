import { UserActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { getUserInited } from '../entities/User/models/selectors/getUserInited';
import { AppRouter } from './providers/RouterProvider';

export const App = () => {
  const dispatch = useDispatch();
  const userInited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      {userInited && (
        <Suspense fallback="">
          <Navbar />

          <div className="content">
            {/* <Sidebar /> */}

            <AppRouter />
          </div>
        </Suspense>
      )}
    </div>
  );
};
