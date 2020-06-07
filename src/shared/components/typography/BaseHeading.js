/**
 * @name BaseHeading
 * @desc, Typography heading levels
 * @props, 1. level, html heading tags , h1...h6
 * */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './BaseHeading.scss';

const BaseHeading = memo(({ level, theme = 'default', children }) => {
  return (
    <>
      {level === 'h2' && (
        <h2 className={`headings headings-theme--${theme}`}>{children}</h2>
      )}
      {level === 'h4' && (
        <h4 className={`headings headings-theme--${theme}`}>{children}</h4>
      )}
    </>
  );
});

BaseHeading.propTypes = {
  level: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BaseHeading;
