import React from 'react';
import { themr } from 'react-css-themr';
import { LIST } from '../identifiers';

const ListDivider = ({ inset, theme }) => (
  <hr className={inset ? `${theme.divider} ${theme.inset}` : theme.divider} />
);

ListDivider.defaultProps = {
  inset: false,
};

export default themr(LIST)(ListDivider);
export { ListDivider };
