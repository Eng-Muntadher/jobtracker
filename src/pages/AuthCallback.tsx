// This page is used to check when the user is signed in via the verification link sent to them by Supabase

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../servises/supabase";
import Spinner from "../components/Spinner";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleCallback() {
      // This checks for the current user session from the URL after the user is redirected
      const { data, error } = await supabase.auth.exchangeCodeForSession(
        window.location.href
      );

      if (error) {
        console.error("Auth callback error:", error);
        navigate("/");
        return;
      }

      if (data?.session) {
        console.log("User logged in:", data.session.user);
        navigate("/");
      } else {
        navigate("/");
      }
    }

    handleCallback();
  }, [navigate]);

  // Return a loading spinner while the user is waiting
  return <Spinner />;
}
