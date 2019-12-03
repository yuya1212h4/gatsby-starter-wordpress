// import React from "react";
import React, { Component } from 'react';
import Header from "../components/Header";

// 下記どっちの書き方でも読み込むことが出来る。

class App extends Component {
  css1 = {
    fontSize: "30px",
    color: "#900",
  }
  render() {
    return <div>
      <Header></Header>
      <div>Helloooooooooo world!</div>
      <div style={this.css1}>css1</div>
    </div>;
  }
}

export default App;
