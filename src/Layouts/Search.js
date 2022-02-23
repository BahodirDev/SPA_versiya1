import React, { useState } from 'react';

function Search({CallBack = Function.prototype}) {
    const [value,setValue] = useState('');
    const handleClick=(e)=>{
        if(e.key==='Enter'){
            SubmitClick()
        }
    }   
    const SubmitClick=()=>{
        CallBack(value)
    }
    return (
        <div className='search-field'>
            <input
             type="search"
            className='form-control '
            id='Panel'
            onChange={(e)=>setValue(e.target.value)}
            onKeyDown={handleClick}
             value={value}
                />
            <button className='btn' id='searchBtn' onClick={SubmitClick}>Search</button>
        </div>
    );
}

export default Search;