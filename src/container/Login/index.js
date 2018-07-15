/* @flow */

import React, { Component } from 'react';
import Auth from '../../service/Auth';

type Props = {
  auth: Object
};

class Login extends Component<Props> {
  props: Props;

  _onClick = () => {
    const { auth } = this.props;

    auth.login();
  };

  render() {
    return <div onClick={this._onClick}>login</div>;
  }
}

export default Login;
