import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">Recipe Box</Link>
            <div className="navbar-nav">
              <Link to="/add" className="nav-item nav-link active">Add Recipe</Link>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
