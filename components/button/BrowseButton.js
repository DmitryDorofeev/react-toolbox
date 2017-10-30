import React, { Component } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { BUTTON } from '../identifiers';
import InjectFontIcon from '../font_icon/FontIcon';
import rippleFactory from '../ripple/Ripple';

const factory = (ripple, FontIcon) => {
  class SimpleBrowseButton extends Component {

    static defaultProps = {
      accent: false,
      className: '',
      flat: false,
      floating: false,
      mini: false,
      neutral: true,
      primary: false,
      raised: false,
    };

    getLevel = () => {
      if (this.props.primary) return 'primary';
      if (this.props.accent) return 'accent';
      return 'neutral';
    }

    getShape = () => {
      if (this.props.raised) return 'raised';
      if (this.props.floating) return 'floating';
      return 'flat';
    }

    handleMouseUp = (event) => {
      this.labelNode.blur();
      if (this.props.onMouseUp) this.props.onMouseUp(event);
    };

    handleMouseLeave = (event) => {
      this.labelNode.blur();
      if (this.props.onMouseLeave) this.props.onMouseLeave(event);
    };

    handleFileChange = (event) => {
      if (this.props.onChange) this.props.onChange(event);
    };

    render() {
      const {
        accent,    // eslint-disable-line
        children,
        className,
        flat,      // eslint-disable-line
        floating,  // eslint-disable-line
        icon,
        inverse,
        label,
        mini,
        neutral,
        primary,   // eslint-disable-line
        raised,    // eslint-disable-line
        theme,
        ...others
      } = this.props;
      const element = 'label';
      const level = this.getLevel();
      const shape = this.getShape();

      const classes = classnames(theme.button, [theme[shape]], {
        [theme[level]]: neutral,
        [theme.mini]: mini,
        [theme.inverse]: inverse,
      }, className);

      const props = {
        ...others,
        ref: (node) => { this.labelNode = node; },
        className: classes,
        disabled: this.props.disabled,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        'data-react-toolbox': 'label',
      };

      return React.createElement(element, props,
          icon ? <FontIcon className={theme.icon} value={icon} /> : null,
        <span>{label}</span>,
        <input className={classes} type="file" onChange={this.handleFileChange} />,
          children,
        );
    }
  }

  return ripple(SimpleBrowseButton);
};

const BrowseButton = factory(rippleFactory({ centered: false }), InjectFontIcon);
export default themr(BUTTON)(BrowseButton);
export { factory as browseButtonFactory };
export { BrowseButton };
