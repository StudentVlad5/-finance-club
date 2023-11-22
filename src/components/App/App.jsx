import { HelmetProvider } from 'react-helmet-async';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, getPermission } from 'redux/auth/selectors';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const EventsPage = lazy(() => import('pages/EventsPage'));
const EventDetailsPage = lazy(() => import('pages/EventDetailsPage'));
const HowToJoinPage = lazy(() => import('pages/HowToJoinPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const AdminPage = lazy(() => import('pages/Admin/AdminPage'));
const AdminUsersPage = lazy(() => import('pages/Admin/AdminUsersPage'));
const AdminEventsPage = lazy(() => import('pages/Admin/AdminEventsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const permission = useSelector(getPermission);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <HelmetProvider>
      <Suspense fallback={<div>{'Loading...'}</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            {/* {permission === 'admin' ? ( */}
            <Route
              path="admin"
              element={<AdminPage />}
              // element={
              //   <PrivateRoute redirectTo="/" component={<AdminPage />} />
              // }
            />
            {/* ) : ( */}
            <Route
              path="user"
              element={
                <PrivateRoute redirectTo="/login" component={<UserPage />} />
              }
            />
            {/* )} */}
            <Route
              path="admin/users"
              element={<AdminUsersPage />}
              // element={
              //   <PrivateRoute
              //     redirectTo="/admin"
              //     component={<AdminUsersPage />}
              //   />
              // }
            />
            <Route
              path="admin/events"
              element={<AdminEventsPage />}
              // element={
              //   <PrivateRoute
              //     redirectTo="/admin"
              //     component={<AdminEventsPage />}
              //   />
              // }
            />

            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo={'/'} component={<LoginPage />} />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute redirectTo={'/'} component={<RegisterPage />} />
              }
            />

            {/* <Route
              path="forgot_password"
              element={
                <RestrictedRoute
                  redirectTo="/user/profile"
                  component={<ForgotPasswordPage />}
                />
              }
            /> */}

            <Route path="events" element={<EventsPage />} />
            <Route path="events/:id" element={<EventDetailsPage />} />
            <Route path="join" element={<HowToJoinPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="contacts" element={<ContactsPage />} />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
