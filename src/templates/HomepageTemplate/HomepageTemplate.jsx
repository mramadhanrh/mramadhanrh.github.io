import React from 'react';
import { Row, Col } from 'antd';

import propTemplates from '../../propTemplates';

import styles from './index.module.css';

const HomepageTemplate = ({ header, children }) => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={23}>
          <Row>
            <Col>
              <header>{header}</header>
            </Col>
            <Col>
              <main className={styles.main}>{children}</main>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

HomepageTemplate.propTypes = {
  header: propTemplates.children.propTypes,
  children: propTemplates.children.propTypes
};

HomepageTemplate.defaultProps = {
  header: propTemplates.children.defaultProps,
  children: propTemplates.children.defaultProps
};

export default HomepageTemplate;
