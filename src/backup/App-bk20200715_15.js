import React from 'react';
//import logo from './logo.svg';
import './App.css';

// const TestFunction = (props) => {
//   return <div>test</div>
// }

class FoodInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodNameTb: props.foodNameTb,
      foodCostTb: props.foodCostTb,
      isUpdate : false
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if(prevProps.foodNameTb != this.props.foodNameTb){
      this.setState({
        foodNameTb: this.props.foodNameTb,
      foodCostTb: this.props.foodCostTb,
      isUpdate : true
      });
    }
  }

 
  updateFood = () => {
    this.props.doUpdateFoodItem (this.state.foodNameTb, this.state.foodCostTb);
  }
  render() {
    return <div>
      <div>
        Food Name
      </div>
      <div>
        <input value={this.state.foodNameTb} onChange={(e) => {
          this.setState({
            foodNameTb: e.target.value
          });
        }}></input>
      </div>
      <div>Food Cost </div>
      <div>
        <input value={this.state.foodCostTb} onChange={(e) => {
          this.setState({
            foodCostTb: e.target.value
          })
        }}></input>
      </div>
      <div>
      <button onClick={this.state.isUpdate ? this.updateFood : this.addFood} > {this.state.isUpdate ? "Update" : "Add"}</button>
      </div>
    </div>
  }
}

class FoodTable extends React.Component {
  constructor(props) {
    super(props); // foodItems
  }
  render() {
    return <div>
      {this.props.foodItems.map((foodItem) =>
        <div>
          <span style={{ marginRight: 20 }}>{foodItem.foodName}</span>
          <span>{foodItem.foodCost}</span>
          <button onClick={() => {
            if (foodItem.isEditing) {
            } else {
              this.props.startEditFoodItem(foodItem.foodName);
            }
          }}>{foodItem.isEditing ? "Process" : "Edit"} </button>
          <button onClick={() => {
            this.props.deleteFoodItem(foodItem.foodName)
          }}>Delete</button>
        </div>)}
    </div>
  }
}

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [
        {
          foodName: "Rice",
          foodCost: "200",
          isEditing: false,
        },
        {
          foodName: "Soup",
          foodCost: "50",
          isEditing: false
        }
      ],
      foodNameTb: "",
      foodCostTb: "",
    };
  }

  deleteFoodItem = (foodName) => {
    var newFoodItems = this.state.foodItems.filter((foodItem) => foodItem.foodName !== foodName);
    this.setState({
      foodItems: newFoodItems
    });
  }

  addFoodItem = (foodName, foodCost) => {
    this.state.foodItems.push({
      foodName: foodName,
      foodCost: foodCost
    });
    this.setState({
      foodItems: this.state.foodItems
    });
  }

  startEditFoodItem = (foodName) => {
    var updatedFoodItem = null;
    var newFoodItems = this.state.foodItems.map((foodItem) => {
      if (foodItem.foodName === foodName) {
        foodItem.isEditing = true;
        updatedFoodItem = foodItem;
        return foodItem;
      } else {
        return foodItem;
      }
    });
    this.setState({
      foodItems: newFoodItems,
      foodNameTb: updatedFoodItem.foodName,
      foodCostTb: updatedFoodItem.foodCost
    });
  }
  doUpdateFoodItem = (foodName, foodCost) => {
    var newFoodItems = this.state.foodItems.map((foodItem) => {
      if (foodItem.foodName === foodName) {
        foodItem.isEditing = false;
        foodItem.foodCost = foodCost;
        return foodItem;
      } else {
        return foodItem;
      }
    });
    this.setState({
      foodItems : newFoodItems
    });
  }

  render() {
    return (
      <div style={{ marginLeft: 50 }}>
        <FoodTable startEditFoodItem={this.startEditFoodItem} deleteFoodItem={this.deleteFoodItem} foodItems={this.state.foodItems}></FoodTable>
        <FoodInput doUpdateFoodItem={this.doUpdateFoodItem} foodNameTb={this.state.foodNameTb} foodCostTb={this.state.foodCostTb} 
        addFoodItem={this.addFoodItem}></FoodInput>
      </div>
    )
  }
}


function App() {
  return (
    <div>
      <Food />
    </div>
  )
}

export default App;
