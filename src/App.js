import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import Header from './Header';
import Footer from './Footer';

function App() {
  const appId = '7785af4a';
  const appKey = '6a527e9912e5a0858be1a719e797c88c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
   const [ error, setError] = useState(false);


  useEffect(() => {
    let url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
    fetch(url)
      .then((response) => {
        return response.json();
      }).then((data) => {
        if(data.count === 0){
          setError(true);
        }else{
          setError(false);
        }
        //setRecipes(data.hits)
        //console.log(data.hits);
        const apiResults = data.hits;
        const dataWithUUID = apiResults.map( (item) => {
          return {...item, id:crypto.randomUUID()}
        })
        // console.log(dataWithUUID);
        setRecipes(dataWithUUID);
      }).catch( error => {
        setError(true);
      }) 
  }, [query]);

  const updateSearch = function (e) {
    setSearch(e.target.value);
    // console.log(search);
  }
  const getSearch = function (e) {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  const removeRecipe = (chosenRecipe) =>{
    // console.log(chosenRecipe);
     const copyOfWords = [...recipes];
    //  console.log(copyOfWords);
    const filteredRecipes = copyOfWords.filter( (wordObject) =>{
          return wordObject.recipe !== chosenRecipe;
    })
    setRecipes(filteredRecipes);
  }


  return (
    <div className="App">
      <Header />
      <form onSubmit={getSearch} className="searchForm">
        <input className="searchBar" placeholder="Enter a Recipe name 🍜" type="text" value={search} onChange={updateSearch}></input>
        <button className="searchButton" type="submit">Search 🔍</button>  
      </form>
        <div>
        { error ? <p className="errorMessage">Sorry 😔, Please try again to search 🙏</p> : null}
        </div>
      <div className="recipes">
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              mealType={recipe.recipe.mealType}
              removeFunc={ () => removeRecipe(recipe.recipe) }      
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )

}

export default App;
