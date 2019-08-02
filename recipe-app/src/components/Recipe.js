import React from 'react';
import './Recipe.css'


const Recipe = (props) => {
    if(props.location.state.recipe){
   const { label, ingredients, url,image, calories}= props.location.state.recipe;
        const renderIngredients = () => {
            return ingredients.map((ingredient,index) => {
                return <li key={index}>{ingredient.text}</li>
            })
        };

            return (
                <div className="another-container" key={url}>
                    <div className="title">
                        <h3><a href={url}>{label}</a></h3>
                    </div>
                    <div className="photo">
                                <img src={image} alt="Recipe"/>
                              </div>
                    <div className="cal">
                        <h3>Calories total:{calories.toFixed([1])}</h3>
                    </div>
                <ol> 
                    <div className="ingredients">
                        {renderIngredients(ingredients)}
                    </div>
                </ol> 
            </div>
            )
    }
    else {
        return <h1>Nothing  </h1>
    }
}

export default Recipe;