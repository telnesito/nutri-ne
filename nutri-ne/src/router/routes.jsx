import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { RecipeContextProvider } from "../context/RecipeContexProvidert";
import Recipes from "../components/Recipes";
import { Typography } from "@mui/material";
import NutritionGuide from "../components/NutritionGuide";
export const router = createBrowserRouter([
  {
    path: "/",
    element:
      <RecipeContextProvider>
        <Home />
      </RecipeContextProvider>,
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