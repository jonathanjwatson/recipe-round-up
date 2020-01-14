import React, { useEffect, useState } from "react";
import API from "../../API/API";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const NewRecipe: React.FC = () => {
  const [recipes, setRecipes] = useState([
    {
      id: null,
      name: "",
      items: []
    }
  ]);

  useEffect(() => {
    API.getRecipes()
      .then(response => {
        //TODO: Create story for back-end team to fix typo: "quntity".
        setRecipes(response.data.recipes);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>New Recipe</h1>
      <ErrorBoundary>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Recipe Id</th>
              <th scope="col">Recipe Name</th>
              <th scope="col">Required Ingredients</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, i: number) => (
              <tr key={i}>
                <th scope="row">{recipe.id}</th>
                <th scope="row">{recipe.name}</th>
                <th scope="row">
                  {recipe.id && <span>Loop through items</span>}
                </th>
                <th scope="row">
                  {recipe.id && (
                    <button className="btn btn-dark">Create Order</button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </ErrorBoundary>
    </>
  );
};

export default NewRecipe;
