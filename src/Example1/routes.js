// routes.js
import routesData from '../routesData';
import transformRoutes from './utils/transformRoutes';


const parentId = 6
const nestedRoutes = transformRoutes(routesData,parentId);

export default nestedRoutes;
