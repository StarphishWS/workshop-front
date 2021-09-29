export default ({ route, store, next }) => {
  const user = store.state.auth.user;

  console.log(user);

  const guard = routeGuard(route.name, user);
  console.log("guard", guard);
  if (!guard) {
    next("/login");
  }
  return true;
};

const routeGuard = (routeName, user) => {
  const routeGuard = ["dashboard"];
  console.log(routeName)
  if (routeGuard.includes(routeName) && user.id) {
    return true;
  } else if (!routeGuard.includes(routeName)) {
    return true;
  }
  return false;
};
