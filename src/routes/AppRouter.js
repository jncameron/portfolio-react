import React from 'react';
import { Switch, Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Contact from '../components/Contact';
import App from '../App';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </div>
  </Router>
)

export default AppRouter;