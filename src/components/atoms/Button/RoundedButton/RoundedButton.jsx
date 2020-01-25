import { styled } from '@material-ui/styles';
import ButtonBase from '../ButtonBase';

const RoundedButton = styled(ButtonBase)(({ style }) => ({
  borderRadius: 1000,
  ...style
}));

export default RoundedButton;
