import React from 'react';
import { Link } from 'react-router-dom';

function ItemMeals(props) {
    const { idMeal, strMeal, strMealThumb } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <p><b>{strMeal}</b></p>
            </div>
            <div className='card-action'>
                <Link to={`/recipe/${idMeal}`} className='btn btn-info'>Category</Link>
            </div>
        </div>
    );
}

export default ItemMeals;