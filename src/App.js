import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = 'd40f2a3f';
  const APP_KEY = '2af04ee6623b1c39659f66ad3e0512be';

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const request= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const response = await request.json();
    setRecipe(response.hits);
  }

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
  }

  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search'
               value={search}
               onChange={updateSearch}
               type="text"/>
        <button className='search-button'>Search</button>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  img={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients} />
          ))}
      </form>
    </div>
  )
}


export default App;
