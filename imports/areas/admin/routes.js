import React from 'react';
import Loadable from 'react-loadable';

import Layout from './views/layout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/pages/Dashboard'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Layout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default routes;
