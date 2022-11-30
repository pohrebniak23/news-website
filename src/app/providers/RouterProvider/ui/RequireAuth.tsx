import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routes/routes';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const user = useSelector(getUserAuthData);

  if (!user) {
    return <Navigate to={RoutePath.home} state={{ from: location }} replace />;
  }

  return children;
};
