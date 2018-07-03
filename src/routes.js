import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routing from './routing';

const Routes = () => renderRoutes(routing);

export default () => (
  <Switch>
    <Routes />
  </Switch>
);
