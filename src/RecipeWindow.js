import React from "react";
import "./RecipeWindow.css";
import Image from "material-ui-image";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

class RecipeWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { like: props.like };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState({ like: !this.state.like });
  }

  componentDidUpdate(prevProps) {
    if (this.props.meal.strMeal !== prevProps.meal.strMeal) {
      this.setState({ like: false });
    }
  }

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
          <h2>
            <a href={this.props.meal.strSource}>{this.props.meal.strMeal}</a>
          </h2>
          <div style={{ cursor: "pointer" }} onClick={this.handleLike}>
            {this.state.like ? (
              <FavoriteBorderIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </div>
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
            <p className="subtitle">Ingredients</p>
            <IngredientList recipelist={list} />
            <p className="subtitle">Recipes</p>
            <p style={{ textAlign: "center", backgroundColor: "#d7d0d0" }}>
              {this.props.meal.strInstructions}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeWindow;
