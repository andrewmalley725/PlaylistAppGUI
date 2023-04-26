import Login from "./components/login";
import HomePage from "./components/homePage";
import NavBar from "./components/navbar";
import DisplaySongs from "./components/songs";
import SignUp from "./components/signup";
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
  },
  {
    path: "/songs",
    element: <DisplaySongs/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  
]);

function App() {
  return (
    <div>
      <NavBar/>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
