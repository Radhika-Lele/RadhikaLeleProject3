import './App.css';

function Recipe( {title, calories, image, ingredients} ){
    return(
        <div className="recipeList">
            <h2>{title}</h2>
            <ol>
                {ingredients.map( (ingredient) =>{
                    // console.log(ingredient);
                  return(
                    <li key={ crypto.randomUUID() }>
                        {ingredient.text}
                    </li>
                  )   
                })}
            </ol>
            <p> Calories = {calories.toFixed(2)}</p>
            <img className="image" src={image} alt="" />
            <button>Delete this Recipe</button>
        </div>
    )
}
export default Recipe;


// key={ingredient.foodId}