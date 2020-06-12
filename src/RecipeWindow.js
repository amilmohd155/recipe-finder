import React from "react";
import "./RecipeWindow.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Image from 'material-ui-image'

class RecipeWindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const imageStyle = {
      width: "300px",
      height: "300px",
      paddingTop: "0px",
      border: "solid",
      margin: "10px 40px",
    };
    return (
      <div>
        <div className="recipe-main-div">
          <h2>{this.props.meal.strMeal}</h2>
          <FavoriteBorderIcon style={{ fontSize: "15px" }} />
        </div>
        <div className="recipe-body-div">
          <Image style={imageStyle} src="http://loremflickr.com/300/200" />
          <div style={{ textAlign: "start" }}>
            <span>
              <p>Category of Meal -</p>
              <p> {this.props.meal.strArea}</p>
            </span>
            <p>Area of Meal - Italian</p>
            <p>Ingredients</p>
            <div>

            </div>
            <p>Recipes</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeWindow;
