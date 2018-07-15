import React, { Component } from 'react';
import auth from '../../service/Auth';

type Props = {
  location: Object
};

class CallBack extends Component {
  props: Props;

  render() {
    const { auth } = this.props;

    auth.handleAuthentication();

    return <div>loading</div>;
  }
}

export default CallBack;
