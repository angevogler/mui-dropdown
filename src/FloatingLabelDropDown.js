import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

/*
export default class FloatingLabelDropDown extends Component {
  render() {
    let menu_items = this.props.options.map((option, i) => {
      return (
        <MenuItem
        key={i}
        className="drop_down_option"
        value={option.rowguid}>
          {option.value}
        </MenuItem>
      )
    })

    return (
        <FormControl className="drop_down_outer" style={{minWidth: '150px', margin: '50px'}}>
          <InputLabel className="drop_down_label">Label</InputLabel>
          <Select
            value={this.props.selected_option}
            onChange={(e) => this.props.selected_option_update(e)}
            input={<Input className="drop_down_input"/>}
          >
            {menu_items}
          </Select>
        </FormControl>
    )
  }
}
*/

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
      padding: '0 5px',
      border: '1px solid black',
      borderRadius: '3px',
    };

    return (
      <FormControl className="drop_down_outer" style={{minWidth: '150px', margin: '50px'}}>
        <InputLabel className="drop_down_label">Label</InputLabel>
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
