/**
 * @name BaseToast
 * @desc, toast which displays information
 * @props,
 *  1. id, id of the toast
 *  2. msg, message to be displayed.
 *  3. level, toast entity information success, warning.
 *  4. afterClose, callback function which invokes after close of toast.
 *  5. offset, time until which toast would be displayed.
 * */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './BaseToast.scss';

const BaseToast = memo(({ id, msg, level, offset, afterClose }) => {
  const [isToastDisplayed, setIsToastDisplayed] = useState(true);

  const handleToastClose = () => {
    const timer = setTimeout(() => {
      setIsToastDisplayed(false);
      afterClose();
    }, offset * 1000);
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    handleToastClose(id);
  }, []);
  return (
    isToastDisplayed && (
      <div
        className={classNames({
          toast: true,
          'toast--success': level === 'success',
        })}>
        <p className="toast_msg">{msg}</p>
      </div>
    )
  );
});

BaseToast.propTypes = {
  id: PropTypes.string,
  msg: PropTypes.string,
  level: PropTypes.string,
  offset: PropTypes.number,
  afterClose: PropTypes.func,
};

BaseToast.defaultProps = {
  msg: '',
  level: 'success',
  offset: 5,
  afterClose: () => {},
};

export default BaseToast;
