import React from 'react';
//import logo from './logo.svg';
import './App.css';

// const TestFunction = (props) => {
//   return <div>test</div>
// }

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_1: "",
      input_2: "",
      operand: "",
      display: ""
    };
  }

  handleClear = () => {
    this.setState({
      input_1: "",
      input_2: "",
      operand: "",
      display: ""
    });
    console.log(this.state)
  }

  handleOperand = (e) => {
    this.setState({
      operand: e.target.value,
      display: ""
    });
    console.log(this.state)
  }

  handleInput = (e) => {
    if (this.state.operand === "") {
      var old = this.state.input_1
      this.setState({
        input_1: old + e.target.value,
        display: old + e.target.value
      });
    } else{
      var old2 = this.state.input_2
      this.setState({
        input_2: old2 + e.target.value,
        display: old2 + e.target.value
      });
    }
    console.log(this.state)
  }

  handleCalculate = () => {
    var input_1 = Number(this.state.input_1)
    var input_2 = Number(this.state.input_2)
    switch (this.state.operand) {
      case "+":
        this.setState({
          display: input_1 + input_2
        });
        break;
      case "-":
        this.setState({
          display: input_1 - input_2
        });
        break;
      case "*":
        this.setState({
          display: input_1 * input_2
        });
        break;
      case "/":
        this.setState({
          display: input_1 / input_2
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.display}></input>
        <div>
          <button value="7" onClick={this.handleInput}>7</button>
          <button value="8" onClick={this.handleInput}>8</button>
          <button value="9" onClick={this.handleInput}>9</button> 
          <button value="*" onClick={this.handleOperand}>X</button>
          
        </div>
        <div>
          <button value="4" onClick={this.handleInput}>4</button>
          <button value="5" onClick={this.handleInput}>5</button>
          <button value="6" onClick={this.handleInput}>6</button> 
          <button value="-" onClick={this.handleOperand}>-</button>
        </div>
        <div>
          <button value="1" onClick={this.handleInput}>1</button>
          <button value="2" onClick={this.handleInput}>2</button>
          <button value="3" onClick={this.handleInput}>3</button> 
          <button value="+" onClick={this.handleOperand}>+</button>
        </div>
        <div>
          <button onClick={this.handleClear}>C</button>
          <button value="0" onClick={this.handleInput}>0</button>
          <button onClick={this.handleCalculate}>=</button> 
          <button value="/" onClick={this.handleOperand}>÷</button>
        </div>
      </div>
    )
  }
}


function App() {
  return (
    <div> 
 <Calculator />

    </div>
  )
}

export default App;
