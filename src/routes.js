import React from 'react';
import { Switch, Route } from 'react-router-dom';
import history from './history';
import Header from './components/Header';
import App from './container/App';
import Login from './container/Login';
import Callback from './container/Login/callback';

export default ({ auth }) => {
  const isAuthenticated = auth.isAuthenticated();

  // ヘッダーはログインしていたら常に表示させるのでSwitchの外側に置く
  // path="/"にexactはつけない。/のコンポーネントからさらにRouteが続いていくため。
  return (
    <React.Fragment>
      {isAuthenticated && <Header auth={auth} />}
      <Switch>
        {isAuthenticated && (
          <Route path="/" render={props => <App {...props} auth={auth} />} />
        )}
        <Route
          exact
          path="/login"
          render={props => <Login {...props} auth={auth} />}
        />
        <Route
          exact
          path="/callback"
          render={props => <Callback {...props} auth={auth} />}
        />
      </Switch>
    </React.Fragment>
  );
};
