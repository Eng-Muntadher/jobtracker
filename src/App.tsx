import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

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
        path: "/signUp",
        element: <SignInPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
