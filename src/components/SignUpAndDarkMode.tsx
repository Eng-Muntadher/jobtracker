import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Button from "./Button";
import guestImage from "../images/guest.jpeg";
import { useLayoutEffect, useState } from "react";

function SignUpAndDarkMode() {
  const { data: user } = useUser();

  const [darkMode, setDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (e) {
      console.log(e);
      return false;
    }
  });

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  useLayoutEffect(() => {
    const el = document.documentElement;
    try {
      if (darkMode) {
        el.classList.add("dark");
        localStorage.setItem("theme", "dark");
        el.style.backgroundColor = "#000";
        if (document.body) document.body.style.backgroundColor = "#000";
      } else {
        el.classList.remove("dark");
        localStorage.setItem("theme", "light");
        el.style.backgroundColor = "#ffffff";
        if (document.body) document.body.style.backgroundColor = "#ffffff";
      }
    } catch (e) {
      console.log(e);
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        // For screen readers to tell which mode is active
        aria-pressed={darkMode}
        aria-label={`Activate ${darkMode ? "light" : "dark"} mode`}
        className="hover:bg-[#e9ebef] text-(--text-color) hover:text-black w-[2.25rem] h-[2.25rem] flex justify-center items-center mr-4 rounded-lg cursor-pointer focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100"
      >
        {darkMode ? <Sun size={16} className="" /> : <Moon size={16} />}
      </button>

      {/* If user in authenticated, display the user profile. Otherwise display the sign In btn*/}
      {!user ? (
        <Button to="sign-in" variation="light" additionalClasses="px-4">
          Sign In
        </Button>
      ) : (
        <Link
          to="user-profile"
          className="focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100 rounded-full hover:outline-none hover:ring-3 hover:ring-(--text-color-secondary)"
        >
          <img
            src={user.user_metadata.publicUrl || guestImage}
            height={33}
            width={33}
            alt="Profile image"
            className="object-cover w-[33px] h-[33px] rounded-full"
          />
        </Link>
      )}
    </div>
  );
}

export default SignUpAndDarkMode;
