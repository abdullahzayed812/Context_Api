import React from "react";

const ThemeContext = React.createContext({
    toggleTheme: () => {},
    changeColor: () => {}
});

export default ThemeContext;