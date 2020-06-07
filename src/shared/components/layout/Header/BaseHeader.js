/**
 * @name BaseHeader
 * @desc, Header Layout, display header with company logo and login button
 * @props, 1. header title , title needs to be display in the header
 * */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { BaseHeading } from '../../';
import './BaseHeader.scss';

const BaseHeader = memo(({ title }) => {
  return (
    <div className="header_container">
      <BaseHeading level="h2">{title}</BaseHeading>
    </div>
  );
});

BaseHeader.propTypes = {
  title: PropTypes.string,
};

export default BaseHeader;
