/**
 * @name BaseLoading
 * @desc, loading component
 * @props, 1. message , loading message
 * */

import React from 'react';
import PropTypes from 'prop-types';

import './BaseLoading.scss';

const BaseLoading = ({ message }) => {
  return (
    <div className="loading_container">
      <p className="loading_message">{message}</p>
    </div>
  );
};

BaseLoading.defaultProps = {
  message: 'loading...',
};

BaseLoading.propTypes = {
  message: PropTypes.string.isRequired,
};

export default BaseLoading;
