export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectUserName = ({ auth }) => auth.user.name;
export const selectEvents = ({ auth }) => auth.user.events;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectId = ({ auth }) => auth.user._id;
export const getUser = ({ auth }) => auth.user;
export const getPermission = ({ auth }) => auth.permission;
