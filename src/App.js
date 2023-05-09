import React, {useEffect , useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const appId = '7785af4a';
  const appKey = '6a527e9912e5a0858be1a719e797c88c';

  const [recipes, setRecipes] = useState([]);

  useEffect( () =>{
      let url = `https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`;
      fetch(url)
        .then( (response) => {
           return response.json();
        }).then( (data) =>{
            setRecipes(data.hits)
             console.log(data.hits);
        })
        
        
      // getRecipes();
  }, []);

  //  const getRecipes = async ()=>{
  //     const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`);
  //     const data = await response.json();
  //     console.log(data);
  //  }
   
  return(
    <div className="App">
       <form className="searchForm">
        <input className="searchBar" type="text "></input>
        <button className="searchButton" type="submit">Search</button>
       </form>
       {recipes.map( (recipe) => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
       ))}
    </div>
  )
  
}

export default App;
