/**
 * @name BaseHeading
 * @desc, Typography heading levels
 * @props, 1. level, html heading tags , h1...h6
 * */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './BaseHeading.scss';

const BaseHeading = memo(({ level, children }) => {
  return (
    <>
      {level === 'h1' && (
        <h1 className={`headings heading-${level}`}>{children}</h1>
      )}
      {level === 'h2' && (
        <h2 className={`headings heading-${level}`}>{children}</h2>
      )}
      {level === 'h3' && (
        <h3 className={`headings heading-${level}`}>{children}</h3>
      )}
      {level === 'h4' && (
        <h4 className={`headings heading-${level}`}>{children}</h4>
      )}
      {level === 'h5' && (
        <h5 className={`headings heading-${level}`}>{children}</h5>
      )}
      {level === 'h6' && (
        <h6 className={`headings heading-${level}`}>{children}</h6>
      )}
    </>
  );
});

BaseHeading.propTypes = {
  level: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BaseHeading;
