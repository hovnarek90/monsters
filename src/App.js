import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "12e43323",
        },
        {
          name: "Frank",
          id: "12e4323",
        },
        {
          name: "Jacky",
          id: "12e43d23",
        },
        {
          name: "Andrei",
          id: "12e4w323",
        },
        
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
