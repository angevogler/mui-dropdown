import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

export default class DropDown extends Component {
  state = {
    value: "",
  }
  value_update = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value});
  }
  render() {
    return (
        <FormControl className="drop_down_outer">
          <InputLabel className="drop_down_label">Label</InputLabel>
          <Select
            value={this.state.value}
            onChange={(e) => this.value_update(e)}
            input={<Input className="drop_down_input"/>}
          >
            <MenuItem className="drop_down_option" value="option_1">Option 1</MenuItem>
            <MenuItem className="drop_down_option" value="option_2">Option 2</MenuItem>
            <MenuItem className="drop_down_option" value="option_3">Option 3</MenuItem>
          </Select>
        </FormControl>
    )
  }
}
