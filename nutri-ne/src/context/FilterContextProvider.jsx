import { createContext, useState } from "react"

const FilterContext = createContext(null)

const FilterContextProvider = ({ children }) => {

  const initialState = {
    maxCalories: '',
    maxIngredients: '',
    alergias: '',
    dietas: ''
  }

  const [filter, setFilter] = useState(initialState)

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContextProvider, FilterContext }