import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getElementsById } from '../API/API';
import Loader from '../Assests/Loader';
import Details from './Details';
import '../styles/Main.css';

function Recipe(props) {
    const {id} = useParams();
    const [recipe,setRecipe] = useState([]);
    const [show,setShow] = useState(false)
    const {goBack} = useHistory()

    useEffect(()=>{
        getElementsById(id)
            .then(data=>setRecipe(data.meals[0]))
    },[id])

    return (
        <div className='Recipe container'>
            <button className='btn btn-primary' id='recipeBtn' onClick={goBack}>Go back</button>
            {!recipe.idMeal ?<Loader />:(
                <div className='recipe-content'>
                    <img src={recipe.strMealThumb} alt={recipe.strCategory} />
                   <div className='article'>
                       <h2>{recipe.strMeal}</h2>
                       <h4>{recipe.strCategory}</h4>
                       {recipe.strArea ? (<p><b>National place: </b>{recipe.strArea}</p>):null}
                   </div>
                   <span >
                       <p style={{padding:'0px, 20px'}}>{recipe.strInstructions}</p>
                   </span>
                   {show ? (
                       <Details show={show} recipe={recipe} setShow={setShow} />
                   ):<button className='btn btn-info' onClick={()=>setShow(!show)}>Show Details</button>}
                   
                </div>
            ) }    
        </div>
    );
}

export default Recipe;