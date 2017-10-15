import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Add extends Component {
  constructor(props) {
    super(props)
    this.addRecipe = () => {
      let newRecipe = {
        title: this.refs.title.value,
        image: this.refs.image.value,
        description: this.refs.description.value,
        ingredients: this.refs.ingredients.value.split(','),
        instructions: this.refs.instructions.value
      }
      this.props.handleAdd(newRecipe);
      this.props.history.goBack();
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="page-title">Add a new Recipe</h2>
            <div className="input-group">
              <span className="input-group-addon">Title:</span>
              <input className="form-control" type="text" ref="title" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">Description:</span>
              <input className="form-control" type="text" ref="description" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">Image Url:</span>
              <input className="form-control" type="text" ref="image" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">Indredients:</span>
              <input className="form-control" type="text" ref="ingredients" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">Instructions:</span>
              <textarea className="form-control" ref="instructions"></textarea>
            </div>
            <button onClick={ this.addRecipe } className="btn btn-primary">Add</button>
            <Link to="/" className="btn btn-default linktag">Back</Link>
          </div>
        </div>
      </div>
    )
  }
}
