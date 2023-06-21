import { createContext, useState } from "react"

const RecipeContext = createContext(null)

const RecipeContextProvider = ({ children }) => {

  const initialState = {
    label: '',
    image: '',
    mealType: '',
    ingredients: '',
    digest: '',
    dietLabels: '',
    cautions: '',
    url: '',
    calories: '',
    recipeYield: '',

  }

  const [recipe, setRecipe] = useState(initialState)

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      {children}
    </RecipeContext.Provider>
  )
}

export { RecipeContextProvider, RecipeContext }