import AppLayout from "./components/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CabinsPage from "./pages/CabinsPage";
import Cabin from "./pages/Cabin";
import MyReservations from "./pages/MyReservations";
import About from "./pages/About";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <PageNotFound />,

      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        { path: "/cabins", element: <CabinsPage /> },
        { path: "/about", element: <About /> },
        { path: "/reservations", element: <MyReservations /> },
        {
          path: "/cabin/:cabinId",
          element: <Cabin />,
          errorElement: <PageNotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
