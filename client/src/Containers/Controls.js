import React, { Component } from 'react';

import Button from '../Components/Button'

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      calculation: []
    }
  }

  render() {
    return (
      <div className="controls">
        <Button
          onClick={this.props.handleClear}
          name="C"
          value="clear"
          color="controls__item--darker"
        />
        <Button
          onClick={this.props.handleModificator}
          name="+/-"
          value="posNeg"
          color="controls__item--darker"
        />
        <Button
          onClick={this.props.handleOperation}
          name="mod"
          value="mod"
          color="controls__item--orangeLight"
        />
        <Button
          onClick={this.props.handleOperation}
          name="/"
          value="/"
          color="controls__item--orangeLight"
        />

        <Button onClick={this.props.handleNumeric} name="7" value="7" />
        <Button onClick={this.props.handleNumeric} name="8" value="8" />
        <Button onClick={this.props.handleNumeric} name="9" value="9" />
        <Button
          onClick={this.props.handleOperation}
          name="x"
          value="*"
          color="controls__item--orangeLight"
        />

        <Button onClick={this.props.handleNumeric} name="4" value="4" />
        <Button onClick={this.props.handleNumeric} name="5" value="5" />
        <Button onClick={this.props.handleNumeric} name="6" value="6" />



        <Button
          onClick={this.props.handleOperation}
          name="-"
          value="-"
          color="controls__item--orangeLight"
        />
        <Button onClick={this.props.handleNumeric} name="1" value="1" />
        <Button onClick={this.props.handleNumeric} name="2" value="2" />
        <Button onClick={this.props.handleNumeric} name="3" value="3" />


        <Button
          onClick={this.props.handleOperation}
          name="+"
          value="+"
          color="controls__item--orangeLight"
        />

        <Button onClick={this.props.handleNumeric} name="0" value="0" />
        <Button onClick={this.props.handleModificator} name="." value="." />
        <Button onClick={this.props.handleModificator} name="&#8592;" value="back" />
        <Button
          onClick={this.props.triggerCalculation}
          name="="
          value="="
          color="controls__item--orangeMedium"
        />
      </div>
    );
  }
}

export default Controls;
