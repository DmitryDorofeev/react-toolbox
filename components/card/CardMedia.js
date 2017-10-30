import React from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { CARD } from '../identifiers';

const CardMedia = ({
  aspectRatio,
  children,
  className,
  color,
  contentOverlay,
  image,
  theme,
  ...other
}) => {
  const classes = classnames(theme.cardMedia, {
    [theme[aspectRatio]]: aspectRatio,
  }, className);

  const innerClasses = classnames(theme.content, {
    [theme.contentOverlay]: contentOverlay,
  });

  const bgStyle = {
    backgroundColor: color || undefined,
    backgroundImage: typeof image === 'string' ? `url('${image}')` : undefined,
  };

  return (
    <div style={bgStyle} className={classes} {...other}>
      <div className={innerClasses}>
        {children}
      </div>
    </div>
  );
};

export default themr(CARD)(CardMedia);
export { CardMedia };
