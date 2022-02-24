import React from 'react';
import { Link } from 'react-router-dom';
class RecipeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null
        };
    }

    componentDidMount() {
        this.searchRecipe(this.props.match.params.id);
    }

    searchRecipe(recipeId) {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
            .then(response => response.json())
            .then(data => this.setState({
                recipe: data.meals
            }));
    }

    render() {
        if (this.state.recipe) {
            console.log(this.state.recipe);
            const  image_url=this.state.recipe[0].strMealThumb;
            const  recipe_id=this.state.recipe[0].mealid;
            const  title=this.state.recipe[0].strMeal;
            const  source_url=this.state.recipe[0].strYoutube;
            const arr=[];
                arr.push(this.state.recipe[0].strIngredient1);
                arr.push(this.state.recipe[0].strIngredient2);
                arr.push(this.state.recipe[0].strIngredient3);
                arr.push(this.state.recipe[0].strIngredient4);
                arr.push(this.state.recipe[0].strIngredient5);
                arr.push(this.state.recipe[0].strIngredient6);
                arr.push(this.state.recipe[0].strIngredient7);
                arr.push(this.state.recipe[0].strIngredient8);
                arr.push(this.state.recipe[0].strIngredient9);

            return (
               
                <div className="container">
               
                    <div className="active-recipe">
                        <img
                            className="active-recipe__img"
                            src={image_url} width="20px" height="400px"
                            alt={recipe_id}
                        />
                        <h3
                            className="active-recipe__title"
                        >
                            {title}
                        </h3>
                        <h3>Ingredients:</h3>
                        <ul>
                        {
                            arr.map(
                                (ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                )
                            )
                        }
                    </ul>
                        <p
                            className="active-recipe__website"
                        >YouTube:
                            <span>
                           
                                <a
                                    href={source_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                Click here to view the  preparation procedure:
                                </a>
                            </span>
                        </p>
                        <button 
                            className="active-recipe__button"
                        >
                            <Link
                                to="/"
                            >
                                Go Home
                            </Link>
                        </button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <p>Fetching Data</p>
            </div>
        );

    }
}

export default RecipeDetail;
