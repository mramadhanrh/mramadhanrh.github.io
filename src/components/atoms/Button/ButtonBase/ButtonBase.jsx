import { Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';

const ButtonBase = styled(Button)(({ style }) => ({
  textTransform: 'none',
  backgroundColor: 'grey',
  color: '#ffffff',
  borderRadius: 5,
  padding: 10,
  '&:hover': {
    backgroundColor: 'grey',
    boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.15)'
  },
  ...style
}));

export default ButtonBase;
