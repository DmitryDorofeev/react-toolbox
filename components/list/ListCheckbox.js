import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { LIST } from '../identifiers';
import InjectCheckbox from '../checkbox/Checkbox';
import InjectListItemContent from './ListItemContent';

const factory = (Checkbox, ListItemContent) => {
  const ListCheckbox = ({
    caption,
    checked,
    className,
    disabled,
    legend,
    name,
    onBlur,
    onChange,
    onFocus,
    theme,
  }) => {
    const _className = classnames(theme.item, theme.checkboxItem, {
      [theme.disabled]: disabled,
    }, className);

    return (
      <li className={_className}>
        <Checkbox
          checked={checked}
          className={theme.checkbox}
          disabled={disabled}
          label={<ListItemContent caption={caption} legend={legend} />}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />
      </li>
    );
  };

  ListCheckbox.defaultProps = {
    checked: false,
    disabled: false,
  };

  return ListCheckbox;
};

const ListCheckbox = factory(InjectCheckbox, InjectListItemContent);

export default themr(LIST)(ListCheckbox);
export { factory as listCheckboxFactory };
export { ListCheckbox };
