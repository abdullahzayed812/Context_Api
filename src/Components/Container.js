import React from "react";
import ThemeContext from "../Context/ThemeContext";
import ThemeColorBtn from "./ThemeColorBtn";

class Container extends React.Component {
    render() {
        return (
            <div
                className="container"
                style={this.context.changeColor()}
            >
                <ThemeColorBtn />
            </div>
        )
    }
}

Container.contextType = ThemeContext;

export default Container;