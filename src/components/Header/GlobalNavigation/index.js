/* @flow */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/2nd_anniversary_logo.png';
import titlelogo from '../../../assets/images/air_closet_title.png';
import styles from './styles.scss';

export default class GlobalNavigation extends Component<Props> {
  props: Props;

  _logout = () => {
    const { logout } = this.props;

    logout();
  };

  render() {
    return (
      <div className={styles.Container}>
        <NavLink
          to="/delivery"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >
          選定
        </NavLink>
        <NavLink
          to="/delivery-management"
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >
          選定管理
        </NavLink>
        <div onClick={this._logout}>Logout</div>
      </div>
    );
  }
}
