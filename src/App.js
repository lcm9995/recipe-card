
import Card from './Card.js'
import RecipeInfo from './RecipeInfo.js'
const App = () => {
    return (
        <><main>
            <Card>
                <RecipeInfo title="Silver Dollar Pancakes" description = "This is a description!"/>
            </Card>

            <div>App</div>
        </main></>
    )
}
export default App 

//#whenever we say export default, we don't need curly braces when we import that component 