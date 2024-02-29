import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NewsPro from "./components/NewsPro";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/news/:id",
          element: <NewsPro />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
