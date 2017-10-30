import React from 'react';
import classnames from 'classnames';

const FontIcon = ({ alt, children, className, theme, value, ...other}) => ( // eslint-disable-line
  <span
    data-react-toolbox="font-icon"
    aria-label={alt}
    className={classnames({ 'material-icons': typeof value === 'string' || typeof children === 'string' }, className)}
    {...other}
  >
    {value}
    {children}
  </span>
);

FontIcon.defaultProps = {
  alt: '',
  className: '',
};

export default FontIcon;
export { FontIcon };
