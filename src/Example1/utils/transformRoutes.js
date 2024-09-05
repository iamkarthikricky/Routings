// utils/transformRoutes.js
const transformRoutes = (routes, parentId) => {
    return routes
      .filter(route => route.parentRouteId === parentId)
      .map(route => {
        const children = transformRoutes(routes, route.id);
        return { ...route, children: children.length > 0 ? children : null };
      });
  };
  
  export default transformRoutes;
  