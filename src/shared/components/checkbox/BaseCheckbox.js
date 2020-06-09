/**
 * @name BaseCheckbox
 * @desc checkbox component,
 * @props
 *  1.id , unique id for the checkbox
 *  2.label, label of the checkbox
 *  3.isSelected , checkbox is selected/unselected
 *  4.onSelect, callback on checkbox selected/unselected
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './BaseCheckbox.scss';

const BaseCheckbox = memo(({ id, label, isSelected, onSelect }) => {
  return (
    <div className="checkbox_container">
      <input type="checkbox" id={`${(id, label)}`} />
      <label htmlFor={`${(id, label)}`}>
        <span className="label_title">{label}</span>
      </label>
    </div>
  );
});

BaseCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default BaseCheckbox;
