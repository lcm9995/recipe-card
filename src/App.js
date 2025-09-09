import RecipeCard from "./components/RecipeCard"

//declare our App component funtion which returns some jsx
const App = () => {
    return (
        <>
            <RecipeCard />
        </>
    )
    //if we want to return more than 1 line of code must put it in parentheses 
    //everything returned needs to just have 1 element wrapping the rest (1 parent )
    //react fragment = empty opening tag and empty closing tag - use instead of just a random/blank parent/container div if youre just trying to make 1 parent 
}


export default App 