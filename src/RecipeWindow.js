import React from "react";
import "./RecipeWindow.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

class RecipeWindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="recipe-main-div">
          <h3>title</h3>
          <FavoriteBorderIcon style={{ fontSize: "15px" }} />
        </div>
        <div>
            
        </div>
      </div>
    );
  }
}

export default RecipeWindow;
