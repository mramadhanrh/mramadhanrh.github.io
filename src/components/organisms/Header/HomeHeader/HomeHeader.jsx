import React from 'react';

import HeaderItem from '../../../atoms/Button/HeaderItem/HeaderItem';

import styles from './index.module.css';

const HomeHeader = () => {
  return (
    <div className={styles.container}>
      <HeaderItem text="Work" />
      <HeaderItem text="Blog" />
      <HeaderItem text="Contact" />
    </div>
  );
};

export default HomeHeader;
