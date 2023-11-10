import { useSelector } from 'react-redux';
import {
  selectUserName,
  getUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userIn = useSelector(getUser);

  return { isLoggedIn, user, isRefreshing, userIn };
};
