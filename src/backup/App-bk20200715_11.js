import React from 'react';
//import logo from './logo.svg';
import './App.css';

const TestFunction = (props) => {
  return <div>test</div>
}

class TestClass extends React.Component {

  constructor(props) {
    super(props);
    this.pae = "sorawit";
    this.state = {
      counter : 0,
      name: "SSS",
      dogs : [
        "a", "b","c"
      ],

      items : [
        {title : "Test1"},
        {title : "Test2"},
        {title : "Test3"}
      ],
      people : [
        {firstName : "Sorawit", lastName : "Sokumpa"},
        {firstName : "A", lastName : "B"},
        {firstName : "C", lastName : "D"},
      ],
      tbLastName :"" ,
      tbFirstName :"" ,

    };
  }
  increment = () => {
    // this.state.counter = this.state.counter +1;
    this.setState({
      counter : this.state.counter + 1
    }); 
  }
    decrease = () =>{
      this.setState({
        counter : this.state.counter - 1
      });
    }
    addDog = () => {;
      this.state.dogs.push("Sorawit");
      this.setState({
        dogs : this.state.dogs
      });
    }

    addPeople = () => {;
      this.state.people.push({firstName : this.state.tbFirstName, lastName :  this.state.tbLastName})
      this.setState({
        people : this.state.people
      });
    }

    handleFirstName = (e) => {
      this.setState({
        tbFirstName: e.target.value
      });;
    }
    handleLastName = (e) => {
      this.setState({
        tbLastName: e.target.value
      });;
    }

  render() {
    return (
      <div>
        {this.name} Counter value = {this.state.counter}
        <button onClick={this.increment}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={()=> {
          this.setState({
            name : "SorawitAAAAA"
          });
        }}>Change Name</button>
        <div>
          {this.state.dogs.map((dog)=>{
              return <div>{dog}</div>
          })}
        </div>
        <button onClick={this.addDog}>Add Dog</button>

        <div>
          {this.state.people.map((person)=>{
              return <div>{person.firstName} {person.lastName}</div>})}
        </div>
        <div>
          First Name : <input type="text" value={this.state.tbFirstName} onChange={this.handleFirstName}></input>
        </div>
         <div>
          Last Name : <input type="text" value={this.state.tbLastName} onChange={this.handleLastName}></input>
        </div>
        <button onClick={this.addPeople}>Add Name</button>
      </div>
      
    )
  }
}



function App() {
  return (
    <div> 
 <TestClass />

    </div>
  )
}

export default App;
