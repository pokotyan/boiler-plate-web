/* @flow */

import React, { Component } from 'react';
import LogoHeader from './LogoHeader';
import GlobalNavigation from './GlobalNavigation';
import styles from './styles.scss';

type Props = {
  auth: Function
};

class Header extends Component<Props> {
  props: Props;

  render() {
    const { logout } = this.props.auth;

    return (
      <div className={styles.Container}>
        <LogoHeader />
        <GlobalNavigation logout={logout} />
      </div>
    );
  }
}

export default Header;
