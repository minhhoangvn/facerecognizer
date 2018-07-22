import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Dice extends Component {
  @observable value = 1;

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.result}>Result: {this.value}</div>
        <button onClick={this.handleRoll}>ROLL</button>
      </div>
    );
  }

  handleRoll = () => {
    this.value = Math.floor(Math.random() * 6) + 1;
  };

  styles = {
    container: {
      padding: '16px 0px'
    },
    result: {
      fontSize: 22,
      marginBottom: 10
    }
  };
}
ReactDOM.render(<Dice />, document.getElementById('dice'));
