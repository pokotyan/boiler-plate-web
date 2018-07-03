/* @flow */

import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import * as testActions from '../../actions/test';
import Header from '../../components/Header';
import Delivery from '../../components/Delivery';
import DeliveryManagement from '../../components/DeliveryManagement';
import styles from './styles.scss';
import '../../styles/reset.scss';

type Props = {
  test: Object,
  testActions: Object
};

class App extends Component<Props> {
  props: Props;

  render() {
    return (
      <div
        className={styles.Container}
        onClick={() => {
          this.props.testActions.test(1111);
        }}
      >
        <Route path="/delivery" render={() => <Delivery />} />
        <Route
          path="/delivery-management"
          render={() => <DeliveryManagement />}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  };
}
function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    testActions: {
      ...bindActionCreators(testActions, dispatch)
    }
  };
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(AppContainer);
