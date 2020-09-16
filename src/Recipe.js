import React from 'react';

const Recipe = ({title,calories,img,ingredients}) => {
    return(
        <div>
         <h3>{title}</h3>
         <p>Calories: {Math.floor(calories)}</p>
         <div className='content'>
          <ol>{ingredients.map(ingredient => (<li key='title'>{ingredient.text}</li>))}</ol>
          <img src={img} alt=""/>
         </div>
         
        </div>
        
    )
}

export default Recipe