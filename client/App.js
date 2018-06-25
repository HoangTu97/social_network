import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../imports/content/stylesheets/style.css'

// admin
import Layout from '../imports/areas/admin';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" name="adminHome" component={ Layout } />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
