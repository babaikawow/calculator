import React, { Component } from 'react';
import axios from 'axios';


import Display from '../Components/Display';
import Controls from './Controls';
import config from "../config.js";

import '../App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      step: config.steps.arg1,
      argument1: "",
      argument2: "",
      operation: "",
      sum: 0,
      error: ""
    };
  }

  calculate = () => {
    const { argument1, argument2, operation } = this.state;
    if (!(argument1 && argument2 && operation)) {
      return;
    }

    if(!config.operationsMap.hasOwnProperty(operation)) {
      return;
    }

    if(argument2 == 0 && ["mod", "/"].includes(operation)) {
      return  this.setState({
        error: "Second argument cannot be 0"
      }, () => {
        setTimeout(() => {this.setState({ error: ""})} , 5000)
      });
    }

    const useCase = config.operationsMap[operation];

    axios.post(`/calculations/${useCase}`, {
      a: argument1,
      b: argument2
    }).then((result) => {
      this.setState({
        step: config.steps.finished,
        sum: result.data
      })
    }).catch((err) => {
      this.setState({
        error: err.message
      }, () => {
        setTimeout(() => {this.setState({ error: ""})} , 5000)
      })
    })

  }

  getCalcullation() {
    const { argument1, operation, argument2 } = this.state;
    return `${argument1} ${operation} ${argument2}`;
  }

  handleOperation = e => {
    const value = e.target.value;
    const { step, operation } = this.state;
    if (step === config.steps.finished) {
      return;
    }

    if (step === config.steps.arg1 && !isNaN(this.state.argument1)) {
      return this.setState({
        operation: value,
        step: config.steps.opt
      });
    }

    if (step === config.steps.opt) {
      return this.setState({
        operation: value,
        step: config.steps.opt
      });
    }

    if (step === config.steps.arg2 && operation === value) {
      this.setState({
        step: config.steps.arg2
      }, () => {
        this.calculate();
      });
    }


  }

  handleNumeric = e => {
    const value = e.target.value;
    const { step } = this.state;

    if (step === config.steps.finished) {
      return this.setState({
        argument1: value,
        argument2: "",
        operation: "",
        step: config.steps.arg1
      });
    }

    if (step === config.steps.arg1) {
      let argument1 = this.state.argument1;
      argument1 += value
      return this.setState({
        argument1
      });
    }

    if (step === config.steps.opt) {
      return this.setState({
        argument2: value,
        step: config.steps.arg2
      });
    }

    if (step === config.steps.arg2) {
      let argument2 = this.state.argument2;
      argument2 += value
      this.setState({
        argument2
      });
    }
  }

  handleClear = () => {
    this.reset();
  }

  handleModificator = (e) => {
    const modificator = e.target.value;
    const { step, argument1, argument2 } = this.state;

    let currentArgument, currentValue;

    if (![config.steps.arg1, config.steps.arg2].includes(step)) {
      return;
    }

    if (step === config.steps.arg1) {
      currentArgument = config.steps.arg1;
      currentValue = argument1;
    } else {
      currentArgument = config.steps.arg2;
      currentValue = argument2;
    }

    if (modificator === "back") {
      if (!currentValue) {
        return;
      }

      let modifiedValue = Math.trunc(currentValue / 10);

      if (modifiedValue === 0) {
        modifiedValue = ""
      }

      return this.setState({
        [currentArgument]: modifiedValue
      })
    }

    if (modificator === ".") {
      if (!currentValue) {
        return;
      }

      if (/\.+/.test(currentValue)) {
        return
      }

      return this.setState({
        [currentArgument]: currentValue + "."
      })
    }

    if (modificator === "posNeg") {
      if (!currentValue) {
        return;
      }

      const sign = Math.sign(currentValue);
      let modifiedValue;
      if (sign === 1) {
        modifiedValue = "-" + currentValue;
      } else if (sign === -1) {
        modifiedValue = currentValue.slice(1);
      } else {
        return;
      }

      return this.setState({
        [currentArgument]: modifiedValue
      })
    }

  }

  reset() {
    this.setState({
      step: config.steps.arg1,
      argument1: "",
      argument2: "",
      operation: "",
      sum: 0
    })
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display calculation={this.getCalcullation()} sum={this.state.sum} error={this.state.error}/>
          <Controls
            triggerSum={this.sum}
            triggerCalculation={this.calculate}
            handleOperation={this.handleOperation}
            handleModificator={this.handleModificator}
            handleNumeric={this.handleNumeric}
            handleClear={this.handleClear}
          />
        </div>
      </div>
    );
  }
}

export default App;
