import React from "react";
import ThemeContext from "../Context/ThemeContext";

class ThemeColorBtn extends React.Component {
    // static contextType = ThemeContext;
    render() {
        return (
            <h1
                onClick={this.context.toggleTheme} 
                style={this.context.changeColor()}
            >
                Change Theme
            </h1>
        )
    }
}

ThemeColorBtn.contextType = ThemeContext;

export default ThemeColorBtn;