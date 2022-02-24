import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Recipes from './components/Recipes';
//hello food//
class App extends React.Component {
  constructor(props){
    super(props);
    this.searchRecipe = this.searchRecipe.bind(this);
    this.state = {
      recipes: []
    };
  } 

  searchRecipe(recipeName){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
    .then(response=>response.json())
    .then(data=>
      this.setState({
      recipes: data.meals
    }));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Recipe Search</h2>
        </header>
        <SearchBar onSubmit={this.searchRecipe}/>
        <Recipes recipes={this.state.recipes} />
      </div>    
    );
  }
}

export default App;
