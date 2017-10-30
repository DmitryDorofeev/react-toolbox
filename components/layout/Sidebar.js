import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import InjectDrawer from '../drawer/Drawer';
import { LAYOUT } from '../identifiers';

const factory = (Drawer) => {
  const Sidebar = ({
    active,
    className,
    clipped,
    permanentAt, // eslint-disable-line
    pinned,
    theme,
    ...rest
  }) => {
    const _className = classnames({
      [theme.pinned]: pinned,
      [theme.clipped]: clipped,
    }, className);

    return (
      <Drawer
        {...rest}
        active={active || pinned}
        className={_className}
        insideTree
        theme={theme}
        themeNamespace="sidebar"
        type="right"
        withOverlay={!pinned}
      />
    );
  };

  Sidebar.defaultProps = {
    className: '',
    pinned: false,
    right: false,
  };

  return Sidebar;
};

const Sidebar = factory(InjectDrawer);
export default themr(LAYOUT)(Sidebar);
export { factory as sidebarFactory };
export { Sidebar };
