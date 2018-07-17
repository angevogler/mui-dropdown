import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

export default class DropDown extends Component {
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
