import React from 'react'


const Search = (props) => {
        return (

          <form className="search-form" onSubmit={props.handleSubmit}>
          <input className="search-bar" type="text" onChange={props.handleChange}/>
          <button className="submit-button" type="submit">Search</button>
          </form>
          
        )   

}
export default Search


