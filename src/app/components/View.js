import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class View extends Component {
  render() {
    let recipes = this.props.recipes;
    let index = this.props.match.params.id;
    let recipe = recipes[index];
    let ingredients = recipe.ingredients.map((x, i) => <li key={ i } >{ x }</li>)
    let jumboStyle = {
      backgroundImage: 'url(' + recipe.image + ')',
      backgroundSize: 'cover',
      minHeight: '400px',
      color: 'white'
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron" style={ jumboStyle }>
              <h1>{ recipe.title }</h1>
              <hr />
              <p>{ recipe.description }</p>
            </div>
            <h3>Ingredients needed:</h3>
            <ol>
              { ingredients }
            </ol>
            <h3>Reciepe instructions</h3>
            <p> { recipe.instructions } </p>
          </div>
        </div>
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>
    )
  }
}
