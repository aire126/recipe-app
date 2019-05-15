import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import { Button, Jumbotron }  from 'react-bootstrap';

const App = () => {
   const APP_ID = "34db8f4b";
   const APP_KEY = "51d5655621d2d2b8e633f57e2eb2ced7";

   const[recipes, setRecipes] = useState([]);
   const[search, setSearch] = useState('');
   const[query, setQuery] = useState('chicken')

useEffect(() => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(
    "https://api.edamam.com/search?q=" + (query) + "&app_id=" + (APP_ID) + "&app_key=" + (APP_KEY)
  );
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className='App'>
     <div>
      <Jumbotron className="jumbotron">
       <h1>Kitty Chef</h1>
       </Jumbotron>
     </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <Button className="search-button" type="submit">Search</Button>
      </form>
      <div className="recipes">
      {recipes.map (recipe => (
        <Recipe
           key={recipe.recipe.label}
           title={recipe.recipe.label}
           calories={recipe.recipe.calories}
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           url={recipe.recipe.url}
        />
      ))};
      </div>
    </div>
  );
}

export default App;
