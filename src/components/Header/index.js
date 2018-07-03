/* @flow */

import React, { Component } from 'react';
import LogoHeader from './LogoHeader';
import GlobalNavigation from './GlobalNavigation';
import styles from './styles.scss';

type Props = {
  test: Object,
  testActions: Object
};

class Header extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.Container}>
        <LogoHeader />
        <GlobalNavigation />
      </div>
    );
  }
}

export default Header;
