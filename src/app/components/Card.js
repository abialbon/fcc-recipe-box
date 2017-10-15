import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Card extends Component {
  constructor(props) {
    super(props)
    this.deleteReciepe = () => {
      props.handleDelete(props.index);
    }
  }

  render() {
    return (
      <div className="card" style={ {width: '20rem', margin: '10px' } }>
        <img className="card-img-top" src={ this.props.recipe.image } />
        <div className="card-body">
          <Link to={ '/view/' + this.props.index } className="card-title">{ this.props.recipe.title }</Link>
          <p className="card-text">{ this.props.recipe.description }</p>
          <Link to={ '/edit/' + this.props.index } className="btn btn-primary linktag">Edit</Link>
          <button onClick={ this.deleteReciepe } className="btn btn-danger">Delete</button>
        </div>
      </div>
    )
  }
}
