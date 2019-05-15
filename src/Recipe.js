import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, url}) => {
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li className={style.ingredientText}>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.caloriesText}>{calories} Calories</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className={style.image} src={image} alt="Food" />
      </a>
    </div>
  );
}

export default Recipe;
