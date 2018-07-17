import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

let styles = {
  underline: {
    '&:after': {
      borderBottom: 'none',
    },
    '&:before': {
      borderBottom: 'none',
    },
  }
}

const FloatingLabelDropDown = (props) => {
    const classes = props.classes;

    const menu_items = props.options.map((option, i) => {
      return (
        <MenuItem
        key={i}
        className="drop_down_option"
        value={option.rowguid}>
          {option.value}
        </MenuItem>
      )
    });

    let form_control_style = {
      minWidth: '150px',
      margin: '50px',
      border: props.selected_option !== '' ? '1px solid black' : 'none',
      borderRadius: '3px',
    }

    let input_style = {
      textAlign: 'left',
      paddingLeft: '5px',
      border: props.selected_option === '' ? '1px solid black' : 'none',
      borderRadius: '3px',
    };

    let label_style = {
      padding: props.selected_option === '' ? '0 5px' : '5px',
      color: '#ccc',
    }

    return (
      <FormControl className="drop_down_outer" style={form_control_style}>
        <InputLabel className="drop_down_label" style={label_style}>Label</InputLabel>
        <Select
          value={props.selected_option}
          onChange={(e) => props.selected_option_update(e)}
          input={<Input
            className="drop_down_input"
            classes={{underline: classes.underline}}
            style={input_style}
          />}
        >
          {menu_items}
        </Select>
      </FormControl>
    )
}

FloatingLabelDropDown.propTypes = {
  selected_option: PropTypes.string,
  options: PropTypes.array,
  selected_option_update: PropTypes.func,
}

export default withStyles(styles)(FloatingLabelDropDown);
