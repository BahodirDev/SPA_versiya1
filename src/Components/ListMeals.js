import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ItemMeals from './ItemMeals';

function ListMeals(props) {
    const {meals} = props;
    const {goBack} = useHistory()
    return (
        <div className='listMeal container'>
            <button className='btn btn-info' id='ListMealBtn' onClick={goBack}>Go back </button>
            {meals.map((item)=>{
                return(
                    <ItemMeals key={item.idMeal} {...item} />
                )
            })}
        </div>
    );
}

export default ListMeals;