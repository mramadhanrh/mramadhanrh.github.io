import React from 'react';

import Character from '../../../atoms/Image/Character/Character';
import GreetingTextGroup from '../../TextGroup/GreetingTextGroup';

import styles from './index.module.css';

const Introduction = () => {
  return (
    <div className={styles.container}>
      <GreetingTextGroup className={styles.container__greeting} />
      <Character className={styles.container__character} />
    </div>
  );
};

export default Introduction;
