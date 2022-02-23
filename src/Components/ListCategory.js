import React from 'react';
import ItemCategory from './ItemCategory';

function ListCategory(props) {
    const {data =[]} =  props;
    return (
        <div className='list'>
            {data.map((item)=>{
                return(
                    <ItemCategory key={item.idCategory} {...item} />
                )
            })}
        </div>
    );
}

export default ListCategory;