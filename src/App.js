import React, { Component } from "react";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h4>Song App</h4>
        <SongList />
        <SongDetail />
      </div>
    );
  }
}

export default App;
