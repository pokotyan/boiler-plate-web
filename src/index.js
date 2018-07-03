import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Header from './components/Header';
import store from './store';
import Routes from './routes';

const history = createBrowserHistory();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Header />
            <Routes />
          </div>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

if (module.hot) {
  module.hot.accept('./routes', () => {
    render();
  });
}
