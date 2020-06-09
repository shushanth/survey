/**
 * @name BaseButton
 * @desc, Button component which uses native css button and render styles with props
 * @props, 1. title , button title to display in the button,
 *   2. size: size of the button which defines size of the button
 *   3. level , primary, .. different button themes and colors to apply for button
 * */

import './BaseButton.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BaseButton = ({ title, level, size, onBtnClick }) => {
  return (
    <div className="button_container">
      <button
        className={classNames(
          {
            'btn btn_level--primary': level === 'primary',
          },
          {
            'btn_size--default': size === 'default',
          }
        )}
        onClick={onBtnClick}>
        {title}
      </button>
    </div>
  );
};

BaseButton.defaultProps = {
  title: 'button',
  level: 'primary',
  size: 'default',
  onBtnClick: () => {},
};

BaseButton.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.string,
  size: PropTypes.string,
  onBtnClick: PropTypes.func,
};

export default BaseButton;
