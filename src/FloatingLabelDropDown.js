import React, { Component } from 'react';
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

    let input_style = {
      textAlign: 'left',
      paddingLeft: '5px',
      border: '1px solid black',
      borderRadius: '3px',
    };

    let label_style = {
      padding: '0 5px',
      color: 'black',
    }

    return (
      <FormControl className="drop_down_outer" style={{minWidth: '150px', margin: '50px'}}>
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

export default withStyles(styles)(FloatingLabelDropDown);
