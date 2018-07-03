/* @flow */

import React from 'react';
// import styles from './styles.scss';
import logo from '../../../assets/images/2nd_anniversary_logo.png';
import titlelogo from '../../../assets/images/air_closet_title.png';
import styles from './styles.scss';

export default () => (
  <div className={styles.Container}>
    <img className={styles.LogoImage} src={logo} alt="" />
    <img className={styles.TitleImage} src={titlelogo} alt="" />
  </div>
);
