import React from 'react';
import 'antd/dist/antd.css';

import propTemplates from '../../propTemplates';

import '../../media/css/global-styles.css';
import '../../media/font/font-stylesheet.css';

const Layout = ({ children }) => {
  return <>{children}</>;
};

const { children } = propTemplates;

Layout.propTypes = {
  children: children.propTypes
};

Layout.defaultProps = {
  children: children.defaultProps
};

export default Layout;
