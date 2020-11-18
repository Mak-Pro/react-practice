import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientsList from './IngredientList.js';

const Ingredients = (props) => {

	const [ingredients, setIngredients ] = useState([]);

	const addIngredientHandler = (ingredient) => {
		setIngredients( prevIngredients => [
			...prevIngredients,
			{id: + new Date(), ...ingredient}
		 ]);
	}

  return (
    <div className="App">
      <IngredientForm  addIngredient={(ingredient) => addIngredientHandler(ingredient)}/>
      <section>
        <Search />
        <IngredientsList ingredients={ingredients} onRemoveItem={() => {}}/>
      </section>
    </div>
  );
}

export default Ingredients;
