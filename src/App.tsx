import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import AllApplicationsPage from "./pages/AllApplicationsPage";
import Stats from "./pages/Stats";
import AiChatbot from "./pages/AiChatbot";
import OneApplicationPage from "./pages/OneApplicationPage";
import AddApplicationPage from "./pages/AddApplicationPage";

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
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/ai-chatbot",
        element: <AiChatbot />,
      },
      {
        path: "/application",
        element: <OneApplicationPage />,
      },
      {
        path: "/add-application",
        element: <AddApplicationPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
