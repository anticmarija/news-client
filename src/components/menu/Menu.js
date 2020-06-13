import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to={`/country/${"llala"}/`}>Top news</Link>
        <Link>Categories</Link>
        <Link>Search</Link>
      </div>
    );
  }
}

export default Menu;
