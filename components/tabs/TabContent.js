import React, { Component } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { TABS } from '../identifiers';

class TabContent extends Component {
  static defaultProps = {
    active: false,
    className: '',
  };

  render() {
    const className = classnames(this.props.theme.tab, {
      [this.props.theme.active]: this.props.active,
    }, this.props.className);

    return (
      <section className={className} tabIndex={this.props.tabIndex}>
        {this.props.children}
      </section>
    );
  }
}

export default themr(TABS)(TabContent);
export { TabContent };
