import React , { lazy, Suspense, useContext, useEffect, useState }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";



const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {
  return (
    <div className="App">
      {/* <userContext.Provider value={{loggedInUser: userName , setUserName}}> */}
      <Header />
     <Outlet />
      {/* </userContext.Provider> */}
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
       
      },
      {
        path: "/about",
        element: <About/>,
       
      },
      {
        path: "/contact",
        element: <ContactUs/>,
       
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }

    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
