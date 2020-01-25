import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

import RoundedButton from '../RoundedButton/RoundedButton';

const useStyles = makeStyles({
  button: {
    display: 'inline-block',
    fontSize: '1.15em',
    padding: '5px 25px',
    cursor: 'pointer',
    color: '#2b2b2b',
    fontWeight: 700,
    transition: '0.25s all cubic-bezier(0.215, 0.61, 0.355, 1)',
    margin: '0 10px',
    backgroundColor: 'transparent',
    '&:hover, &:focus': {
      backgroundColor: '#1e88e5',
      color: '#ffffff',
      boxShadow: '0px 5px 10px 0px rgba(30, 136, 229, 0.4)'
    }
  }
});

const HeaderItem = ({ text, onClick }) => {
  const classname = useStyles();

  return (
    <RoundedButton aria-label={text} type="button" className={classname.button} onClick={onClick}>
      {text}
    </RoundedButton>
  );
};

HeaderItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

HeaderItem.defaultProps = {
  text: '',
  onClick: () => {}
};

export default HeaderItem;
