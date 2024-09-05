// utils.js
import  routesData  from '../routesData';

export const getRoutesByParentId = (parentRouteId) => {
  return routesData.filter(route => route.parentRouteId === parentRouteId);
};
