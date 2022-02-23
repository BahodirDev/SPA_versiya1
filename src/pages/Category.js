import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getElementByFilter } from '../API/API';
import Loader from '../Assests/Loader';
import ListMeals from '../Components/ListMeals';

function Category(props) {
    const {name} = useParams();
    const [meals,setMeals] = useState([]);
    useEffect(()=>{
        getElementByFilter(name)
            .then(data=>setMeals(data.meals))
    },[name])
    if(!name){
        return <Loader />
    }



    return (
        <>
            {!meals.length ? <Loader /> :<ListMeals meals={meals} />}
        </>
    );
}

export default Category;