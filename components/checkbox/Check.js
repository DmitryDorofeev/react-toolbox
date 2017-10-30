import React from 'react';
import classnames from 'classnames';

const factory = (ripple) => {
  const Check = ({ checked, children, onMouseDown, theme, style }) => (
    <div
      data-react-toolbox="check"
      className={classnames(theme.check, { [theme.checked]: checked })}
      onMouseDown={onMouseDown}
      style={style}
    >
      {children}
    </div>
  );

  return ripple(Check);
};

export default factory;
