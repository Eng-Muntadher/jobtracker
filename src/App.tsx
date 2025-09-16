import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import AllApplicationsPage from "./pages/AllApplicationsPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: null,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/all-applications",
        element: <AllApplicationsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
