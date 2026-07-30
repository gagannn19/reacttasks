import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display a list of recipes with name, cook time, and ingredient count.";

const requirements = [
  "Render each recipe as a card",
  "Clicking a recipe expands/collapses its ingredient list",
  "Seed at least 4 sample recipes"
];
import { useState } from 'react';

export default function RecipeList() {

  const [click, setClick] = useState(null);

  function changeClick(i) {
    if(click == i) {
      setClick(null);
    }
    else {
      setClick(i);
    }
  }

  const recipesList = [
    {
      name : "Vegetable Fried Rice", 
      cookTime : "25 min",
      ingredients : "Rice, carrot, peas, capsicum, onion, garlic, soy sauce, oil, salt, pepper"
    },
    {
      name : "Paneer Butter Masala", 
      cookTime : "35 min",
      ingredients : "Paneer, tomato, onion, butter, cream, ginger, garlic, spices"
    },
    {
      name : "Grilled Cheese Sandwich", 
      cookTime : "10 min",
      ingredients : "Bread, cheese, butter"
    },
    {
      name : "Veggie Pasta", 
      cookTime : "30 min",
      ingredients : "Pasta, broccoli, capsicum, mushroom, garlic, olive oil, cheese"
    }
  ]
  
  return (
    <div className="task-page">
      <TaskInfo
        title="Recipe List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/recipe-list.jsx"]}
      />
      <div className="task-workspace">
        {recipesList.map((recipe,i)=>(
          <div key={i} onClick={()=>changeClick(i)} style={{border:"2px solid white", margin:"10px", width:"200px"}}>
            <p>{recipe.name}</p>
            <p>{recipe.cookTime}</p>
            <p>{recipe.ingredients.split(",").length}</p>
            <p>{click==i && recipe.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
