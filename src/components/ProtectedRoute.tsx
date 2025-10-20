import type { JSX } from "react";
import { useUser } from "../hooks/useUser";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

function ProtectedRoute({ children }: Props) {
  const { data: user, isPending } = useUser();

  if (isPending) return null;

  if (!user) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;
