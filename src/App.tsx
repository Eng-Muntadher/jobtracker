import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorComponent from "./components/ErrorComponent";
import AuthCallback from "./pages/AuthCallback";

const HomePage = lazy(() => import("./pages/HomePage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const AllApplicationsPage = lazy(() => import("./pages/AllApplicationsPage"));
const Stats = lazy(() => import("./pages/Stats"));
const AiChatbot = lazy(() => import("./pages/AiChatbot"));
const SingleApplicationPage = lazy(
  () => import("./pages/SingleApplicationPage")
);
const AddApplicationPage = lazy(() => import("./pages/AddApplicationPage"));
const UserProfile = lazy(() => import("./pages/UserProfile"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // data considered fresh for 5 mins
      gcTime: 1000 * 60 * 10, // stays in cache for 10 mins
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorComponent />, // Errors will bubble here
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
        path: "/auth/callback",
        element: <AuthCallback />,
      },
      // Below are the "Protected routes"
      {
        path: "/all-applications",
        element: (
          <ProtectedRoute>
            <AllApplicationsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/stats",
        element: (
          <ProtectedRoute>
            <Stats />
          </ProtectedRoute>
        ),
      },
      {
        path: "/ai-chatbot",
        element: (
          <ProtectedRoute>
            <AiChatbot />
          </ProtectedRoute>
        ),
      },
      {
        path: "/application/:id",
        element: (
          <ProtectedRoute>
            <SingleApplicationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-application",
        element: (
          <ProtectedRoute>
            <AddApplicationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/user-profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            width: "var(--toast-width)",
            maxWidth: "var(--toast-max-width)",
            minWidth: "var(--toast-min-width)",
            padding: "var(--toast-padding)",
            fontSize: "var(--toast-font-size)",
            lineHeight: "var(--toast-line-height)",
            borderRadius: "var(--toast-border-radius)",
            background: "var(--text-color-secondary)",
            color: "#fff",
          },
        }}
      />

      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
