import Login from "./components/login";
import HomePage from "./components/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
      path: "/",
      element: <HomePage/>,
  },
  {
      path: "/login",
      element: <Login/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
