import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  // Вариант, когда state - объект
  /*const [state, setState] = useState({
    title: '',
    amount: '',
  });*/


  // Вариант, когда используется множество состояний
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');


  const changeTitleHandler = (e) => {
    // Вариант, когда state - объект
    /*let title = e.target.value;
    setState( prevState => ({
      ...prevState,
      title
    }) );*/

    // Вариант, когда используется множество состояний
    setTitle(e.target.value);

  }

  const changeAmountHandler = (e) => {
    // Вариант, когда state - объект
    /*let amount = e.target.value;
    setState( prevState => ({
      ...prevState,
      amount
    }) );*/

    // Вариант, когда используется множество состояний
    setAmount(e.target.value);
  }



  const submitHandler = event => {
    event.preventDefault();
    props.addIngredient({title, amount});
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            {/* Вариант, когда state - объект */}
            {/*<input type="text" id="title" onChange={changeTitleHandler} value={state.title}/>*/}

            {/* Вариант, когда используется множество состояний */}
            <input type="text" id="title" onChange={changeTitleHandler} value={title}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            {/* Вариант, когда state - объект */}
            {/*<input type="number" id="amount" onChange={changeAmountHandler} value={state.amount}/>*/}

            {/* Вариант, когда используется множество состояний */}
            <input type="number" id="amount" onChange={changeAmountHandler} value={amount}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
