import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.editRecipe = () => {
      let newRecipe = {
        title: this.refs.title.value,
        image: this.refs.image.value,
        description: this.refs.description.value,
        ingredients: this.refs.ingredients.value.split(','),
        instructions: this.refs.instructions.value
      }
      this.props.handleEdit(newRecipe, this.props.match.params.id);
      this.props.history.goBack();
    }
  }
  render() {
    let recipe = this.props.recipes[this.props.match.params.id];
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="page-title">Edit your recipe</h2>
            <div className="input-group">
              <span className="input-group-addon">Title:</span>
              <input className="form-control" defaultValue={ recipe.title } type="text" ref="title" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">Description:</span>
              <input className="form-control" defaultValue={ recipe.description } type="text" ref="description" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">Image Url:</span>
              <input className="form-control" defaultValue={ recipe.image } type="text" ref="image" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">Indredients:</span>
              <input className="form-control" defaultValue={ String(recipe.ingredients) } type="text" ref="ingredients" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">Instructions:</span>
              <textarea className="form-control" defaultValue={ recipe.instructions } ref="instructions"></textarea>
            </div>
            <button onClick={this.editRecipe} className="btn btn-primary">Save</button>
            <Link to="/" className="btn btn-default linktag">Back</Link>
          </div>
        </div>
      </div>
    )
  }
}
