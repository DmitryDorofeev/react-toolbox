import React from 'react';
import { themr } from 'react-css-themr';
import { LIST } from '../identifiers';

const ListItemAction = ({ action, theme }) => {
  const { onClick, onMouseDown } = action.props;
  const stopRipple = onClick && !onMouseDown;
  const stop = e => e.stopPropagation();
  return (
    <span className={theme.itemAction} onMouseDown={stopRipple && stop} onClick={onClick && stop}>
      {action}
    </span>
  );
};

export default themr(LIST)(ListItemAction);
export { ListItemAction };
