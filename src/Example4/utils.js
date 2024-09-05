// utils.js
export const getRoutesByParentId = (routesData, parentRouteId) => {
    return routesData.filter(route => route.parentRouteId === parentRouteId);
  };
  