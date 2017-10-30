import React from 'react';

const factory = (ripple) => {
  const Thumb = ({ onMouseDown, theme, ...other }) => (
    <span className={theme.thumb} onMouseDown={onMouseDown} {...other} />
  );

  return ripple(Thumb);
};

export default factory;
