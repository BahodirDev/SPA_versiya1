import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { getElementByCategory } from '../API/API';
import Loader from '../Assests/Loader';
import ListCategory from '../Components/ListCategory';
import Search from '../Layouts/Search';

function HomePage(props) {

    const [data,setData] = useState([]);

    const [filteredItems,setFilteredItems] = useState([])
    const {push} = useHistory();
    const {search,pathname} = useLocation()
   
    const SearchPanel=(str)=>{
        setFilteredItems(data.filter(s=>s.strCategory.toLowerCase().includes(str.toLowerCase())))
        push({
            pathname,
            search:`?s=${str}`
        })
        
    }

    useEffect(()=>{
        getElementByCategory()
            .then(data=>{
                setData(data.categories)
                setFilteredItems( search ? data.categories
                    .filter(s=>s.strCategory.toLowerCase()
                    .includes(search.split('=')[1].toLocaleLowerCase())) : data.categories
                    )
            })
            
    },[search])
  

    return (
       <div className="container">
           <Search CallBack={SearchPanel}  />
        {!data.length ? <Loader /> :(<ListCategory data={filteredItems} />)}
       </div>
    );
}

export default HomePage;