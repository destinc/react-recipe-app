import React, {Component} from 'react';
import './Recipes.css'
import {  Route } from "react-router-dom";
import { Link } from "react-router-dom"

class Recipes extends Component {
    renderHealth = (label) => {
        return label.map ((label, index)=>{
        return <li>{label}</li>
        })
    }

    renderRecipes = () => {
        if(this.props.recipes){
            return this.props.recipes.map((item, index)=> { 
                const {label, image, source, url}= item;
                  return(
                      <div className="recipe-container" key={index}>
                         
                              <div className="title">
                                <h3><a href={url}>{label}</a></h3>
                              </div>
                              <div className="source">
                                <h3>{source}</h3>
                              </div>
                              <div className="photo">
                                <img src={image} alt="Recipe"/>
                              </div>
                              <button className="recipe_buttons">
                             <Link to={{pathname:`/recipe/${label}`, state:{recipe:item}}}>
                                 
                             View Recipe</Link></button>
                              
                      </div>
                    ) 
            })
         }else {
            return <h3>Please stand by</h3>
         }
    }

    renderIngredients = (ingredient) => {
        return ingredient.map((ingredient,index) => {
            return <li key={index}>{ingredient.text}</li>
        })
    }

    render(){
        return(
            <div className="render">
                {this.renderRecipes()}
            </div>
        )
    }
}
export default Recipes