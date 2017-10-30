import React, { Component } from 'react';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { DATE_PICKER } from '../identifiers';
import events from '../utils/events';
import time from '../utils/time';

import InjectIconButton from '../button/IconButton';
import InjectInput from '../input/Input';
import InjectDialog from '../dialog/Dialog';
import calendarFactory from './Calendar';
import datePickerDialogFactory from './DatePickerDialog';

const factory = (Input, DatePickerDialog) => {
  class DatePicker extends Component {

    static defaultProps = {
      active: false,
      locale: 'en',
      sundayFirstDayOfWeek: false,
    };

    state = {
      active: this.props.active,
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.props.active && this.state.active !== nextProps.active) {
        this.setState({ active: nextProps.active });
      }
    }

    handleDismiss = () => {
      this.setState({ active: false });
      if (this.props.onDismiss) {
        this.props.onDismiss();
      }
    };

    handleInputFocus = (event) => {
      events.pauseEvent(event);
      this.setState({ active: true });
    };

    handleInputBlur = (event) => {
      events.pauseEvent(event);
      this.setState({ active: false });
    };

    handleInputClick = (event) => {
      events.pauseEvent(event);
      this.setState({ active: true });
      if (this.props.onClick) this.props.onClick(event);
    };

    handleInputKeyPress = (event) => {
      if (event.charCode === 13) {
        events.pauseEvent(event);
        this.setState({ active: true });
      }
      if (this.props.onKeyPress) this.props.onKeyPress(event);
    };

    handleSelect = (value, event) => {
      if (this.props.onChange) this.props.onChange(value, event);
      this.setState({ active: false });
    };

    render() {
      const { active, onDismiss,// eslint-disable-line
        autoOk, cancelLabel, enabledDates, disabledDates, inputClassName, inputFormat,
        locale, maxDate, minDate, okLabel, onEscKeyDown, onOverlayClick, readonly,
        sundayFirstDayOfWeek, value, ...others } = this.props;
      const finalInputFormat = inputFormat || time.formatDate;
      const date = Object.prototype.toString.call(value) === '[object Date]' ? value : undefined;
      const formattedDate = date === undefined ? '' : finalInputFormat(value, locale);

      return (
        <div data-react-toolbox="date-picker" className={this.props.theme.container}>
          <Input
            {...others}
            className={classnames(this.props.theme.input, { [inputClassName]: inputClassName })}
            disabled={readonly}
            error={this.props.error}
            icon={this.props.icon}
            label={this.props.label}
            name={this.props.name}
            onFocus={this.handleInputFocus}
            onKeyPress={this.handleInputKeyPress}
            onClick={this.handleInputClick}
            readOnly
            type="text"
            value={formattedDate}
          />
          <DatePickerDialog
            active={this.state.active}
            autoOk={autoOk}
            cancelLabel={cancelLabel}
            className={this.props.className}
            disabledDates={disabledDates}
            enabledDates={enabledDates}
            locale={locale}
            maxDate={maxDate}
            minDate={minDate}
            name={this.props.name}
            onDismiss={this.handleDismiss}
            okLabel={okLabel}
            onEscKeyDown={onEscKeyDown || this.handleDismiss}
            onOverlayClick={onOverlayClick || this.handleDismiss}
            onSelect={this.handleSelect}
            sundayFirstDayOfWeek={sundayFirstDayOfWeek}
            theme={this.props.theme}
            value={date}
          />
        </div>
      );
    }
  }

  return DatePicker;
};

const Calendar = calendarFactory(InjectIconButton);
const DatePickerDialog = datePickerDialogFactory(InjectDialog, Calendar);
const DatePicker = factory(InjectInput, DatePickerDialog);

export default themr(DATE_PICKER)(DatePicker);
export {
  DatePickerDialog,
  factory as datePickerFactory,
};
export { Calendar };
export { DatePicker };
