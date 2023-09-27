import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

  const onlineStatus = useOnlineStatus();

  return (
    <>
      <Header className="fixed top-0" />
      {onlineStatus === true && <Outlet />}
      {onlineStatus === false && (
        <div className="h-screen w-full flex justify-center items-center">
          <h1 className="font-bold text-xl mb-48 text-gray-600">
            Looks like you're offline!! Please check your internet connection...
          </h1>
        </div>
      )}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
