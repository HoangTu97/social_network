import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Breadcrumbs = Loadable({
  loader: () => import('../imports/views/Base/Breadcrumbs'),
  loading: Loading,
});

const Cards = Loadable({
  loader: () => import('../imports/views/Base/Cards'),
  loading: Loading,
});

const Carousels = Loadable({
  loader: () => import('../imports/views/Base/Carousels'),
  loading: Loading,
});

const Collapses = Loadable({
  loader: () => import('../imports/views/Base/Collapses'),
  loading: Loading,
});

const Dropdowns = Loadable({
  loader: () => import('../imports/views/Base/Dropdowns'),
  loading: Loading,
});

const Forms = Loadable({
  loader: () => import('../imports/views/Base/Forms'),
  loading: Loading,
});

const Jumbotrons = Loadable({
  loader: () => import('../imports/views/Base/Jumbotrons'),
  loading: Loading,
});

const ListGroups = Loadable({
  loader: () => import('../imports/views/Base/ListGroups'),
  loading: Loading,
});

const Navbars = Loadable({
  loader: () => import('../imports/views/Base/Navbars'),
  loading: Loading,
});

const Navs = Loadable({
  loader: () => import('../imports/views/Base/Navs'),
  loading: Loading,
});

const Paginations = Loadable({
  loader: () => import('../imports/views/Base/Paginations'),
  loading: Loading,
});

const Popovers = Loadable({
  loader: () => import('../imports/views/Base/Popovers'),
  loading: Loading,
});

const ProgressBar = Loadable({
  loader: () => import('../imports/views/Base/ProgressBar'),
  loading: Loading,
});

const Switches = Loadable({
  loader: () => import('../imports/views/Base/Switches'),
  loading: Loading,
});

const Tables = Loadable({
  loader: () => import('../imports/views/Base/Tables'),
  loading: Loading,
});

const Tabs = Loadable({
  loader: () => import('../imports/views/Base/Tabs'),
  loading: Loading,
});

const Tooltips = Loadable({
  loader: () => import('../imports/views/Base/Tooltips'),
  loading: Loading,
});

const BrandButtons = Loadable({
  loader: () => import('../imports/views/Buttons/BrandButtons'),
  loading: Loading,
});

const ButtonDropdowns = Loadable({
  loader: () => import('../imports/views/Buttons/ButtonDropdowns'),
  loading: Loading,
});

const ButtonGroups = Loadable({
  loader: () => import('../imports/views/Buttons/ButtonGroups'),
  loading: Loading,
});

const Buttons = Loadable({
  loader: () => import('../imports/views/Buttons/Buttons'),
  loading: Loading,
});

const Charts = Loadable({
  loader: () => import('../imports/views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('../imports/views/Dashboard'),
  loading: Loading,
});

const CoreUIIcons = Loadable({
  loader: () => import('../imports/views/Icons/CoreUIIcons'),
  loading: Loading,
});

const Flags = Loadable({
  loader: () => import('../imports/views/Icons/Flags'),
  loading: Loading,
});

const FontAwesome = Loadable({
  loader: () => import('../imports/views/Icons/FontAwesome'),
  loading: Loading,
});

const SimpleLineIcons = Loadable({
  loader: () => import('../imports/views/Icons/SimpleLineIcons'),
  loading: Loading,
});

const Alerts = Loadable({
  loader: () => import('../imports/views/Notifications/Alerts'),
  loading: Loading,
});

const Badges = Loadable({
  loader: () => import('../imports/views/Notifications/Badges'),
  loading: Loading,
});

const Modals = Loadable({
  loader: () => import('../imports/views/Notifications/Modals'),
  loading: Loading,
});

const Colors = Loadable({
  loader: () => import('../imports/views/Theme/Colors'),
  loading: Loading,
});

const Typography = Loadable({
  loader: () => import('../imports/views/Theme/Typography'),
  loading: Loading,
});

const Widgets = Loadable({
  loader: () => import('../imports/views/Widgets/Widgets'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('../imports/views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('../imports/views/Users/User'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
