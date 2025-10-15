import {
  useRouteError,
  useNavigate,
  isRouteErrorResponse,
} from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import Button from "./Button";

function ErrorComponent() {
  // Fetch the error from the route (page) that caused it
  const error = useRouteError();

  const navigate = useNavigate();

  let title = "Something went wrong";
  let message = "An unexpected error occurred. Please try again later.";

  // If the error is a route-based error (e.g., 404, 500)
  if (isRouteErrorResponse(error)) {
    title =
      error.status === 404 ? "Page Not Found" : "Oops! Something went wrong";
    message =
      error.status === 404
        ? "The page you’re looking for doesn’t exist or has been moved."
        : error.statusText || "An unexpected error occurred.";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-6 py-12 text-center">
      <div className="flex flex-col items-center max-w-md gap-6">
        <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full dark:bg-red-900/30">
          <AlertTriangle
            className="w-10 h-10 text-red-500 dark:text-red-400"
            aria-hidden="true"
          />
        </div>

        <h1 className="text-3xl font-semibold text-(--text-color)">{title}</h1>

        <p className="text-(--text-color-secondary)">{message}</p>

        <div className="flex gap-3 mt-6">
          <Button
            variation="light"
            additionalClasses="px-5 py-2.5"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>

          <Button
            variation="dark"
            additionalClasses="px-7 py-2.5"
            onClick={() => navigate("/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorComponent;
