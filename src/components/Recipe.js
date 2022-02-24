import React from 'react';
import { Link } from 'react-router-dom';

function Recipe(props) {
    return (
        <div
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
        >
            <div className="recipes__box">
                <img
                    className="recipe__box-img"
                    src={props.data.strMealThumb} widht="50%" height="50%"
                    alt={props.data.recipe_id}
                />
                <div className="recipe__text">
                    <h5
                        className="recipes__title"
                    >
                        {props.data.strMeal}
                    </h5>
                </div>
                <button className="recipe_buttons">
                    <Link
                        to={{
                            pathname: `/recipe/${props.data.idMeal}`,
                            state: props.data
                        }}
                    >
                        View Recipe
                    </Link>
                </button>

            </div>
        </div>
    );
}

export default Recipe;
