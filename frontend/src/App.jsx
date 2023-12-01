import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import StarredProducts from "./pages/StarredProducts";

document.title = "Elite - Interview Task"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/starred" element={<StarredProducts />} />
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}



export default App
