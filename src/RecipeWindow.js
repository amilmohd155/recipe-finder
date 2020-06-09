import React from "react";
import "./RecipeWindow.css";

class RecipeWindow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p>{this.props.value}</p>
        );
    }
}

export default RecipeWindow;