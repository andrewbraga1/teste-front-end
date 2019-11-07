import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form id="search-film">
          <input
            type="text"
            id="search-film-input"
            placeholder="Procure seu filme"
          ></input>
          <button type="submit" id="search-film-submit">
            Pesquisar
          </button>
        </form>
        <div id="results"></div>
      </div>
    );
  }
}

export default App;
