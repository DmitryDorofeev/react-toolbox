import React from 'react';
import cn from 'classnames';
import { themr } from 'react-css-themr';
import { LAYOUT } from '../identifiers';

const Panel = ({ bodyScroll, children, className, theme, ...other }) => {
  const _className = cn(theme.panel, { [theme.bodyScroll]: bodyScroll }, className);
  return (
    <div {...other} data-react-toolbox="panel" className={_className}>
      {children}
    </div>
  );
};

Panel.defaultProps = {
  bodyScroll: true,
  className: '',
};

export default themr(LAYOUT)(Panel);
export { Panel };
