import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { LIST } from '../identifiers';
import { FontIcon } from '../font_icon/FontIcon';
import InjectAvatar from '../avatar/Avatar';
import InjectListItemContent from './ListItemContent';
import InjectListItemActions from './ListItemActions';

const factory = (Avatar, ListItemContent, ListItemActions) => {
  const ListItemLayout = (props) => {
    const className = classnames(props.theme.item, {
      [props.theme.disabled]: props.disabled,
      [props.theme.selectable]: props.selectable,
    }, props.className);

    const leftActions = [
      props.leftIcon && <FontIcon value={props.leftIcon} key="leftIcon" />,
      props.avatar && <Avatar image={props.avatar} key="avatar" />,
      ...props.leftActions,
    ];
    const rightActions = [
      props.rightIcon && <FontIcon value={props.rightIcon} key="rightIcon" />,
      ...props.rightActions,
    ];
    const emptyActions = item => !item[0] && !item[1] && !item[2];
    const content = props.itemContent || (
      <ListItemContent theme={props.theme} caption={props.caption} legend={props.legend} />
    );

    return (
      <span className={className}>
        {!emptyActions(leftActions) > 0 && <ListItemActions type="left" theme={props.theme}>{leftActions}</ListItemActions>}
        {content}
        {!emptyActions(rightActions) > 0 && <ListItemActions type="right" theme={props.theme}>{rightActions}</ListItemActions>}
      </span>
    );
  };

  ListItemLayout.defaultProps = {
    disabled: false,
    selectable: false,
  };

  return ListItemLayout;
};

const ListItemLayout = factory(InjectAvatar, InjectListItemContent, InjectListItemActions);
export default themr(LIST)(ListItemLayout);
export { factory as listItemLayoutFactory };
export { ListItemLayout };
