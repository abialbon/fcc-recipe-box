import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Setting up the local storage
const localforage = require('localforage');
localforage.config({
  name        : '_paulnotes_recipes',
});

// Importing all components
import Header from '../components/Header';
import Grid from '../components/Grid';
import Edit from '../components/Edit';
import View from '../components/View';
import Add from '../components/Add';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: null // Initial state is null
    };

    this.addRecipe = (recipe) => {
      let tempRecipes = this.state.recipes || [];
      tempRecipes.push(recipe);
      localforage.setItem('recipes', tempRecipes);
      this.setState({
        recipes: tempRecipes
      })
    } // addRecipe

    this.editRecipe = (recipe, index) => {
      let tempRecipes = this.state.recipes || [];
      tempRecipes[index] = recipe;
      localforage.setItem('recipes', tempRecipes);
      this.setState({
        recipes: tempRecipes
      });
    } // editRecipe

    this.deleteRecipe = (index) => {
      let tempRecipes = this.state.recipes;
      tempRecipes.splice(index, 1);
      localforage.setItem('recipes', tempRecipes);
      this.setState({
        recipes: tempRecipes
      });
    } // deleteRecipe

  }

  componentWillMount() {
    // Check if the user has already visited
    localforage.getItem('visited', (err, visited) => {
      if (!visited) { //if not
        let recipes = [
          {
            title: 'Classic Tuna Mayo',
            image: 'http://www.expressoshow.com/website/admin/UserFiles/Image/Food/Recipes%202017/October/tuna-melts.jpg',
            description: 'Nothing mouth watering like the Toasted Tuna Mayo',
            ingredients: ['2 x 170 g cans light meat tuna chunks' , 
              'Three thick mayonnaise packs, plus extra for spreading ',
              'One cup lemon juice ',
              'Two branches of Italian parsley, chopped ',
              'One cuponion, finely chopped ',
              'Finely chopped celery',
              'Two garlic cloves, crushed (optional)' ],
            instructions: 'Drain the tuna well, then transfer to a bowl. Separate into large flakes using a fork and mix well with the remaining ingredients except the bread, cress and crisps. Chill until ready to use.' +  
            'Sandwich 3–4 T of the mixture between 2 slices of bread. ' +
            'Spread the outside of the sandwich with a thin layer of mayonnaise and slowly brown in a nonstick pan, covering the bread with a square of baking paper, and weighing it down in the pan.' + 
            'Serve with cress and crisps.'
          },
          {
            title: 'Expresso Express',
            image: 'https://img.huffingtonpost.com/asset/55f746a2180000530061d0de.jpeg?ops=scalefit_720_noupscale',
            description: 'A strong punch to the mind',
            ingredients: ['Coffee', 'Milk', 'Cream', 'Sugar'],
            instructions: 'Take coffee out from the coffee machine. Add other ingredients as needed. Enjoy.'
          }
        ];
        
        localforage.setItem('recipes', recipes, (err) => {
          localforage.setItem('visited', true, (err) => {
            localforage.getItem('recipes', (err, value) => {
              this.setState({
                recipes: value
              });
            })
          })
        })
      }
    })
  }

  componentDidMount() {
    localforage.getItem('recipes', (err, recipes) => {
      this.setState({
        recipes: recipes
      });
    })
  }
  
  render() {
    return (
      <div>
          <Header />
          <Route path="/" exact render={ () => <Grid recipes = { this.state.recipes } handleDelete = { this.deleteRecipe.bind(this) }/> } /> 
          <Route path="/view/:id" render={(props) => <View { ...props } recipes={ this.state.recipes } /> } />
          <Route path="/edit/:id" render={(props) => <Edit { ...props } recipes={ this.state.recipes } handleEdit={ this.editRecipe.bind(this) }/> } />
          <Route path="/add" render={(props) => <Add  { ...props } handleAdd = { this.addRecipe.bind(this) } /> } />
      </div>
    )
  }
}
