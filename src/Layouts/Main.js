import React, { useState } from 'react';
import '../styles/Main.css';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import {Switch, Route} from 'react-router-dom';
import Error from '../Assests/Error';
import Category from '../pages/Category';
import Recipe from '../Components/Recipe';

function Main(props) {

    const [massiv,setMassiv] = useState([
        {id:1,name:'Bahodirjon',age:18},
        {id:2,name:'Samandar',age:18},
        {id:3,name:'Anvarjon',age:18},
        {id:4,name:'Sarvarjon',age:18},
        {id:5,name:'Mallaboy',age:18},
        {id:6,name:'Valijon',age:18},
    ])

    return (
        <div className='content'>
           <Switch>
            <Route exact path='/' component={HomePage} />  
            <Route path='/about' component={About} /> 
            <Route path='/contact' component={Contact} /> 
            <Route path='/category/:name' component={Category} />
            <Route path='/recipe/:id' component={Recipe} />
            <Route component={Error} />
           </Switch> 
        </div>
    );
}

export default Main;