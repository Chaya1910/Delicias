import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


//import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));



const AppLayout = () => {
    return (
    <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                      <About />
                    </Suspense>
                  ),            
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                  <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                  </Suspense>
                ),
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }

        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);