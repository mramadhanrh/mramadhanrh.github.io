import PropTypes from 'prop-types';
import propShapeTemplates from './propShapeTemplates';

export default propShapeTemplates(
  PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  null
);
