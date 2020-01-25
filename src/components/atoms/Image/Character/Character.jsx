import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Character = ({ className }) => {
  return <div className={`${styles.image} ${className}`} />;
};

Character.propTypes = {
  className: PropTypes.string
};

Character.defaultProps = {
  className: ''
};

export default Character;
