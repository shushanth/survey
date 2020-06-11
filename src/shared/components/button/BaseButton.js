/**
 * @name BaseButton
 * @desc, Button component which uses native css button and render styles with props
 * @props, 1. title , button title to display in the button,
 *   2. size: size of the button which defines size of the button
 *   3. level , primary, .. different button themes and colors to apply for button
 * */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './BaseButton.scss';

const BaseButton = ({ title, level, size, onBtnClick, disabled }) => {
  return (
    <div className="button_container">
      <button
        className={classNames(
          {
            'btn btn_level--primary': level === 'primary',
          },
          {
            'btn_size--default': size === 'default',
          },
          {
            'btn btn_disabled': disabled,
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
  disabled: false,
  onBtnClick: () => {},
};

BaseButton.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onBtnClick: PropTypes.func,
};

export default BaseButton;
