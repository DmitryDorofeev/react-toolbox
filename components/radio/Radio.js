import React from 'react';

const factory = (ripple) => {
  const Radio = ({ checked, onMouseDown, theme, ...other }) => (
    <div
      data-react-toolbox="radio"
      className={theme[checked ? 'radioChecked' : 'radio']}
      onMouseDown={onMouseDown}
      {...other}
    />
  );

  return ripple(Radio);
};

export default factory;
