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
  // 認証していない状態で/に来るとLoginコンポーネントが表示される。認証後に/に来るとAppオブジェクトが表示される
  return (
    <React.Fragment>
      {isAuthenticated && <Header auth={auth} />}
      <Switch>
        {isAuthenticated && (
          <Route path="/" render={props => <App {...props} auth={auth} />} />
        )}
        <Route
          exact
          path="/"
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
