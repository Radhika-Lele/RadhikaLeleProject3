import './App.css';

function Recipe( {title, calories, image, ingredients, removeFunc, mealType} ){
    return(
    <main>
        <div className="recipeList">
            <h2>{title}</h2>
            <h4> Calories = {calories.toFixed(2)}</h4>
            <h4>Meal Type = {mealType}</h4>
            <img className="image" src={image} alt="" />
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
            <button className="deleteButton" onClick={removeFunc}>Delete this Recipe</button>
        </div>
    </main>
    )
}
export default Recipe;


// key={ingredient.foodId}