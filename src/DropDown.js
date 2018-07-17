import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
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

const DropDown = (props) => {
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

  return (
    <FormControl className="drop_down_outer" style={{minWidth: '150px', margin: '50px'}}>
      <Select
        value={props.selected_option}
        onChange={(e) => props.selected_option_update(e)}
        input={<Input
          className="drop_down_input"
          classes={{underline: classes.underline}}
          style={input_style}
        />}
        displayEmpty
      >
        <MenuItem className="drop_down_option placeholder" value="">
          {props.placeholder}
        </MenuItem>
        {menu_items}
      </Select>
    </FormControl>
  )
}

export default withStyles(styles)(DropDown);
