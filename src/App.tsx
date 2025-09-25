import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import AllApplicationsPage from "./pages/AllApplicationsPage";
import Stats from "./pages/Stats";
import AiChatbot from "./pages/AiChatbot";
import SingleApplicationPage from "./pages/SingleApplicationPage";
import AddApplicationPage from "./pages/AddApplicationPage";
import UserProfile from "./pages/UserProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        path: "/application/:id",
        element: <SingleApplicationPage />,
      },
      {
        path: "/add-application",
        element: <AddApplicationPage />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
