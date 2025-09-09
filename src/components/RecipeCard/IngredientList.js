//const props = { ingredients: [], fakeProp = "fakeyfakey"}
//props will look like above, coming from instantiation in index.js
const IngredientList = (props) =>{
    return (
        <div>
            <h2>Ingredients</h2>
            <ul>
                {RECIPE.ingredients.map((ing, ind)=> { 
                return <li>{ing}</li>
                })  }
            </ul>
        </div>
    )
}
export default IngredientList

//destructuring? doing stuff outisde of the return jsx