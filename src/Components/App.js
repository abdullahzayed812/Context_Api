import React from 'react';
import Container from './Container';
import ThemeContext from "../Context/ThemeContext";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  handleClick() {
    if (this.state.theme === "dark") {
      this.setState({
        theme: "light"
      });
    } else {
      this.setState({
        theme: "dark"
      });
    }
  }
  changeColor() {
    if (this.state.theme === "dark") {
      return {
        backgroundColor: "#333",
        color: "white"        
      }
    } else {
      return {
        backgroundColor: "white",
        color: "#333"
      }
    }
  }
  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={{
          toggleTheme: this.handleClick,
          changeColor: this.changeColor
        }}>
          <Container />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
