import React from "react";
import "./RecipeWindow.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Image from "material-ui-image";

class RecipeWindow extends React.Component {
  render() {
    var i = 1;
    var list = [];
    const imageStyle = {
      width: "300px",
      height: "300px",
      paddingTop: "0px",
      border: "solid",
      margin: "10px 40px",
    };

    while (i <= 20) {
      if (
        this.props.meal["strIngredient" + i] === null ||
        this.props.meal["strIngredient" + i] === ""
      ) {
        break;
      } else {
        list.push({
          in: this.props.meal["strIngredient" + i],
          mes: this.props.meal["strMeasure" + i],
        });
        i++;
      }
    }

    function IngredientList(props) {
      const recipelist = props.recipelist;
      console.log(recipelist);

      const listItem = recipelist.map((item, index) => (
        <span key={index}>
          <p>{item["in"]}</p>
          <p>&nbsp;--&nbsp;</p>
          <p> {item["mes"]}</p>
        </span>
      ));
      return <div className="overflow-div">{listItem}</div>;
    }

    return (
      <div>
        <div className="recipe-main-div">
          <h2>{this.props.meal.strMeal}</h2>
          <FavoriteBorderIcon style={{ fontSize: "15px" }} />
        </div>
        <div className="recipe-body-div">
          <Image style={imageStyle} src={this.props.meal.strMealThumb} />
          <div style={{ textAlign: "start", flex: "1" }}>
            <span>
              <p>Category of Meal -&nbsp;</p>
              <p> {this.props.meal.strCategory}</p>
            </span>
            <span>
              <p>Area of Meal -&nbsp;</p>
              <p> {this.props.meal.strArea}</p>
            </span>
            <p>Ingredients</p>
            <IngredientList recipelist={list} />
            <p style={{ textAlign: "center" }}>Recipes</p>
            <p>{this.props.meal.strInstructions}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeWindow;
