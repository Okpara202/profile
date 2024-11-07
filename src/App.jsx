import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/home";
import Description, { loader as descriptionLoader } from "./components/description";
import Error from "./components/error";
import CatchRoute from "./components/catchAllRoute";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(<>
    <Route path="/" element={<Home />} />
    <Route path="description" element={<Description />} loader={descriptionLoader} errorElement={ <Error /> } />
    <Route path="*" element={<CatchRoute />} />
  </>))
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;