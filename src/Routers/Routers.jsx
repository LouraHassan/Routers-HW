import App from '../App'
import Desert from '../pages/Desert'
import Ocean from '../pages/Ocean'
import Waterfall from '../pages/Waterfall'
import Jungle from '../pages/Jungle'
import Cave from '../pages/Cave'

import ErrorPage from '../pages/ErrorPage'
import {
    createBrowserRouter,
  } from "react-router-dom";
  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/desert",
      element: <Desert/>,
      },
      {
        path: "/ocean",
        element: <Ocean/>,
      },
      {
        path: "/waterfall",
        element: <Waterfall/>,
      },
      {
        path: "/jungle",
        element: <Jungle/>,
      },
      {
        path: "/cave",
        element: <Cave/>,
      },
  ]);
  
  export default Routers