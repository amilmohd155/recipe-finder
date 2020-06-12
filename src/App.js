import React from "react";
import "./App.css";
import RepiceWindow from "./RecipeWindow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", error: null, isLoaded: false, item: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.value !== undefined) {
      event.preventDefault();
      this.fetchData();
    }
  }

  // componentDidMount() {  
  //   this.fetchData();
  // }


  fetchData = () => {
    
    fetch("https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.state.value, {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    })
    .then(res => res.json())
    .then(
      (data) => {
        this.setState({
          isLoaded: true, 
          item: data['meals'][0]    
        });
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error
        });        
      }
    )
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
        {this.state.isLoaded ? (
          <RepiceWindow meal={this.state.item} />
        ) : (
          <h1>Type a Dish Name to Search for it's Ingredients</h1>
        )}
      </div>
    );
  }
}

export default App;
