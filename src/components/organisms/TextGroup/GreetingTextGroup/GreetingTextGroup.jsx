import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import RoundedButton from '../../../atoms/Button/RoundedButton/RoundedButton';

import styles from './index.module.css';
import copyWriting from '../../../../constants/copyWriting';
import link from '../../../../constants/link';

const useStyles = makeStyles({
  container__button: {
    backgroundColor: '#1e88e5',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'midnightblue',
      color: '#ffffff'
    }
  }
});

const GreetingTextGroup = ({ className, greeting, role, dndRole, summary, buttonHref }) => {
  const classname = useStyles();

  return (
    <div className={`${styles.container} ${className}`}>
      <h1 className={styles.container__greeting}>{greeting}</h1>
      <h3 className={styles.container__role}>
        <span className={styles.role__job}>{role}</span>
        <span className={styles.role__dnd}>{` a.k.a ${dndRole}`}</span>
      </h3>
      <p className={styles.container__summary}>{summary}</p>
      <RoundedButton className={classname.container__button} href={buttonHref} target="_blank">
        <span className={styles.button__text}>
          Get in touch with me!
          <span className={styles.button__emoji} role="img" aria-label="waving-hand">
            👋
          </span>
        </span>
      </RoundedButton>
    </div>
  );
};

const { homepage: homeCopy } = copyWriting;

GreetingTextGroup.propTypes = {
  className: PropTypes.string,
  greeting: PropTypes.string,
  role: PropTypes.string,
  dndRole: PropTypes.string,
  summary: PropTypes.string,
  buttonHref: PropTypes.string
};

GreetingTextGroup.defaultProps = {
  className: '',
  greeting: homeCopy.greeting,
  role: homeCopy.role,
  dndRole: homeCopy.dndRole,
  summary: homeCopy.summary,
  buttonHref: link.linkedin
};

export default GreetingTextGroup;
