/**
 * @name BaseCheckbox
 * @desc checkbox component,
 * @props
 *  1.id , unique id for the checkbox
 *  2.label, label of the checkbox
 *  3. selected, checkbox checked/unchecked
 *  3.onSelect, callback on checkbox checked/unchecked
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './BaseCheckbox.scss';

const BaseCheckbox = memo(({ id, label, selected, onSelect }) => {
  return (
    <div className="checkbox_container">
      <input
        type="checkbox"
        aria-label="checkbox-element"
        id={id}
        checked={selected}
        onChange={() => onSelect(id)}
      />
      <label htmlFor={id}>
        <span className="label_title">{label}</span>
      </label>
    </div>
  );
});

BaseCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default BaseCheckbox;
