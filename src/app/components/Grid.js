import React, { Component } from 'react'

import Card from './Card';

export default class Grid extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let handleDelete = this.props.handleDelete;
    let recipesToRender = this.props.recipes? this.props.recipes.map((x, i) => <Card key={ i } recipe={ x } index={ i } handleDelete = { handleDelete } /> ): [];
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="page-title">Recipies</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            { recipesToRender }
          </div>
        </div>
      </div>
    )
  }
}
