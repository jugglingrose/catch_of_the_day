import React from "react";
import Header from "./Header";
import  Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    //Take a copy of existing state
    const fishes = {...this.state.fishes};
    //Add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //set the new fishes object to state
    this.setState({
      fishes: fishes
    });
    };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }

  addToOrder = (key) => {
    //Take a copy of state
    const order = { ...this.state.order};
    // Either add to the order or update the number of our order
    order[key] = order[key] + 1 || 1 ;
    // Call set State to update our state object
    this.setState({ order: order });
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {
              Object.keys(this.state.fishes)
              .map(key =>  <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
