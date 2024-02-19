import { createBrowserRouter } from "react-router-dom";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Root from "../Root/Root";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/contactUs',
            element:<Contact></Contact>
        }
      ]
    },
  ]);

  export default router