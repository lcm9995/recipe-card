import './styles.css'
import {RECIPE} from './recipe_data'
//import ME_IMG from '../../assets/img.jpg' 
//^ importing image into the component thats using it
import IngredientList from './IngredientList'
const RecipeCard=() =>{
    return (
        <div className="card">
        
            
            <div>
            <h2>Ingredients</h2>
            <IngredientList ingredients=(RECIPE.ingredients) fakeProp)
            </div>
            <div>
            <h2>Instructions</h2>
            <ol>
                {RECIPE.instructions.map((instr, ind)=> {
                    return <li>{instr}</li>
                })}
            </ol>
            </div>
        </div>
    )
}
export default RecipeCard

//Props 

//curly braces start javascript, now we can reference variables 

//loop through array , making eah ingreient a list item 
// look into the map ()?


//run npm install once everything in folder, to try out app.js