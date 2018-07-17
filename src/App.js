import React, { Component } from 'react';
import './App.css';

import FloatingLabelDropDown from './FloatingLabelDropDown';
import DropDown from './DropDown';

class App extends Component {
  state = {
    options: [
      {
        rowguid: 'option_1',
        value: 'Option 1'
      }, {
          rowguid: 'option_2',
          value: 'Option 2'
        }, {
          rowguid: 'option_3',
          value: 'Option 3'
        }, {
          rowguid: 'option_4',
          value: 'Option 4'
        },
    ],
    selected_option: '',
  }
  selected_option_update = (e) => {
    this.setState({selected_option: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <FloatingLabelDropDown
          selected_option={this.state.selected_option}
          options={this.state.options}
          selected_option_update={this.selected_option_update}
        />
        <DropDown
          selected_option={this.state.selected_option}
          options={this.state.options}
          selected_option_update={this.selected_option_update}
        />
      </div>
    );
  }
}

export default App;
