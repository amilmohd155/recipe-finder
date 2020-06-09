import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", showResults: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ showResults: true });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">Recipe Finder</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="recipe-input"
            type="text"
            name="recipe"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter the name of the dish"
          />
          <input className="btn-submit" type="submit" value="Get Ingredients" />
        </form>
        {this.state.showResults ? (
          <div>{this.state.value}</div>
        ) : (
          <h1>
            Type a Dish Name to Search for it's Ingredients
          </h1>
        )}
      </div>
    );
  }
}

export default App;
