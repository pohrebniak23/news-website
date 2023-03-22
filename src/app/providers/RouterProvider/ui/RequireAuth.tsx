import { UserRole, getUserAuthData, getUserRole } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routes/routes';

interface RequireAuthProps {
  children: JSX.Element;
  roles: UserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const location = useLocation();
  const user = useSelector(getUserAuthData);

  const userRoleData = useSelector(getUserRole);

  const requireRole = roles.includes(userRoleData);

  if (!user) {
    return <Navigate to={RoutePath.home} state={{ from: location }} replace />;
  }

  if (!requireRole) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
};
