import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { RecipeContextProvider } from "../context/RecipeContexProvidert";
import Recipes from "../components/Recipes";
import NutritionGuide from "../components/NutritionGuide";
import { FilterContextProvider } from "../context/FilterContextProvider";
export const router = createBrowserRouter([
  {
    path: "/",
    element:
      <FilterContextProvider>
        <RecipeContextProvider>
          <Home />
        </RecipeContextProvider>
      </FilterContextProvider>,
    children: [
      {
        path: 'recipes',
        element: <Recipes />
      },
      {
        path: '',
        element: <NutritionGuide />
      }
    ]
  },
]);