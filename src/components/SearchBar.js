import React from 'react';

function SearchBar(props) {
  return (
    <form
        style={{ marginBottom:"2rem" }} 
        onSubmit={(e)=>{
          e.preventDefault();
          props.onSubmit(e.target.recipeName.value);
    }}>
        <input
         className="form__input" 
         type="text"
         name="recipeName"
        />
        <input
          className="form__button" 
          type="submit"
        />
    </form>
  );
}

export default SearchBar;