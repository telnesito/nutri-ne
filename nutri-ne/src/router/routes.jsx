import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { RecipeContextProvider } from "../context/RecipeContexProvidert";
export const router = createBrowserRouter([
  {
    path: "/",
    element:
      <RecipeContextProvider>
        <Home />
      </RecipeContextProvider>,
  },
]);