import React from 'react';

function Details(props) {
    const {recipe,show, setShow} = props;
    return (
        <>
        <button className='btn btn-danger' onClick={()=>setShow(!show)}>Close</button>
        <div className='row'>
            <div className='col-12'>
                <table className='table table-striped table-hover' style={{background:'#f1f1f1'}}>
                     <thead>
                           <th>Recipe</th>
                         <th>Measure</th>
                     </thead>
             {Object.keys(recipe).map((key)=>{
                 if(key.includes('Ingredient') && recipe[key]){
                     return(
                         <tr>
                             <td>{recipe[key]}</td>
                             <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                         </tr>
                     )
                 }else{
                     return null
                 }
             })}
                </table>
            </div>
         <div>
          <iframe  width='100%' height="538" src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
         </div>
        </div>
        </>
    );
}

export default Details;