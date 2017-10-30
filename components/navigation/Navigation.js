import React from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { NAVIGATION } from '../identifiers';
import InjectButton from '../button/Button';
import InjectLink from '../link/Link';

const factory = (Button, Link) => {
  const Navigation = ({ actions, children, className, routes, theme, type }) => {
    const _className = classnames(theme[type], className);
    const buttons = actions.map((action, index) => (
      <Button className={theme.button} key={index} {...action} /> // eslint-disable-line
    ));

    const links = routes.map((route, index) => (
      <Link className={theme.link} key={index} {...route} /> // eslint-disable-line
    ));

    return (
      <nav data-react-toolbox="navigation" className={_className}>
        {links}
        {buttons}
        {children}
      </nav>
    );
  };

  Navigation.defaultProps = {
    actions: [],
    className: '',
    type: 'horizontal',
    routes: [],
  };

  return Navigation;
};

const Navigation = factory(InjectButton, InjectLink);
export default themr(NAVIGATION)(Navigation);
export { factory as navigationFactory };
export { Navigation };
