/**
 * @name BaseLayout
 * @desc, Layout component which encapsulate the other layouts with header and footer(not required as of now)
 * @props, 1. header title , title needs to be display in the header
 * */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import BaseHeader from './Header/BaseHeader';
import './BaseLayout.scss';

const BaseLayout = memo(({ headerTitle = '', children }) => {
  return (
    <div className="layout_container">
      <BaseHeader title={headerTitle} />
      <div className="content_container">{children}</div>
    </div>
  );
});

BaseLayout.propTypes = {
  headerTitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

BaseLayout.defaultProps = {
  headerTitle: '',
};

export default BaseLayout;
