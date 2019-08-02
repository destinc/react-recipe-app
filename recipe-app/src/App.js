import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Search from './components/Search';

import {  Route, Link } from "react-router-dom";
import Axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      userInput: '',
      recipes: [],
      isLoaded: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({userInput: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.state.recipes.splice(0,this.state.recipes.length)
    this.getData();
  }

  componentDidMount() {
    this.setState({isLoaded: true});
  }
  getData = async () => {
    const TOKEN = process.env.REACT_APP_TOKEN
    try {
       
        const apiUrl = `https://api.edamam.com/search?q=${this.state.userInput}&app_id=eaf0a580&app_key=${TOKEN}`;
        const apiResponse = await Axios.get(apiUrl);
        const searchResult = apiResponse.data
        console.log(searchResult.hits)
        if(apiResponse.status === 200) {
          return searchResult.hits.forEach(recipe => {
            this.setState({recipes: [...this.state.recipes, recipe.recipe]})
          })
        }
    } catch (error) {
       console.log(error)
      }
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Let's Get Cooking</h1>
        <Search 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} 
        />
        
        
        <Route exact path='/' render={(props)=> <Recipes recipes= {this.state.recipes} {...props} />}/>
      
          <Route path ={`/recipe/:label`} render={(props)=><Recipe {...props}/>} />

        <Footer />
      </div>
    );
  }
}

export default App;

