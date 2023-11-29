import { HelmetProvider } from 'react-helmet-async';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, getPermission } from 'redux/auth/selectors';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { UserData } from 'components/UserComp/UserData/UserData';
import { Packages } from 'components/UserComp/Packages/Packages';
import { Events } from 'components/UserComp/Events/Events';

const HomePage = lazy(() => import('pages/HomePage'));
const EventsPage = lazy(() => import('pages/EventsPage'));
const EventDetailsPage = lazy(() => import('pages/EventDetailsPage'));
const HowToJoinPage = lazy(() => import('pages/HowToJoinPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ForgotPasswordPage = lazy(() => import('pages/ForgotPasswordPage'));
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
            {permission === 'admin' ? (
              <Route
                path="admin"
                // element={<AdminPage />}
                element={
                  <PrivateRoute redirectTo="/login" component={<AdminPage />} />
                }
              />
            ) : (
              <Route
                path="user"
                element={
                  <PrivateRoute redirectTo="/login" component={<UserPage />} />
                }
              >
                <Route
                  path="profile"
                  element={
                    <PrivateRoute
                      redirectTo="/signin"
                      component={<UserData />}
                    />
                  }
                />
                <Route
                  path="events"
                  element={
                    <PrivateRoute redirectTo="/signin" component={<Events />} />
                  }
                />
                <Route
                  path="packages"
                  element={
                    <PrivateRoute
                      redirectTo="/signin"
                      component={<Packages />}
                    />
                  }
                />
              </Route>
            )}
            <Route
              path="admin/users"
              // element={<AdminUsersPage />}
              element={
                <PrivateRoute
                  redirectTo="/admin"
                  component={<AdminUsersPage />}
                />
              }
            />
            <Route
              path="admin/events"
              // element={<AdminEventsPage />}
              element={
                <PrivateRoute
                  redirectTo="/admin"
                  component={<AdminEventsPage />}
                />
              }
            />

            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo={permission === 'admin' ? '/admin' : '/user'}
                  component={<LoginPage />}
                />
              }
            />

            <Route
              path="forgot_password"
              element={
                <RestrictedRoute
                  redirectTo="/user/profile"
                  component={<ForgotPasswordPage />}
                />
              }
            />

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
