import React, { Component } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { TABLE } from '../identifiers';
import InjectFontIcon from '../font_icon/FontIcon';

const ASC = 'asc';
const DESC = 'desc';

const factory = (FontIcon) => {
  class TableCell extends Component {

    static defaultProps = {
      children: [],
      className: '',
      numeric: false,
      tagName: 'td',
    };

    handleClick = (event) => {
      const { onClick, row, column } = this.props;
      if (onClick) onClick(event, column, row);
    }

    render() {
      const {
        children,
        className,
        numeric,
        row,    // eslint-disable-line
        column, // eslint-disable-line
        sorted,
        tagName,
        theme,
        ...other
      } = this.props;

      const _className = classnames(theme.tableCell, {
        [theme.headCell]: tagName === 'th',
        [theme.rowCell]: tagName === 'td',
        [theme.sorted]: sorted,
        [theme.numeric]: numeric,
      }, className);

      const props = {
        ...other,
        className: _className,
        onClick: this.handleClick,
      };

      return (
        React.createElement(tagName, props, [
          sorted && <FontIcon
            className={classnames(theme.sortIcon, { [theme.asc]: sorted === ASC })}
            key="icon"
            value="arrow_downward"
          />,
          children,
        ])
      );
    }
  }

  return TableCell;
};

const TableCell = factory(InjectFontIcon);
export default themr(TABLE)(TableCell);
export { factory as tableCellFactory };
export { TableCell };
