import { Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Button from "./Button";
import guestImage from "../images/guest.jpeg";

function SignUpAndDarkMode() {
  const { data: user } = useUser();

  return (
    <div className="flex items-center justify-center">
      <button
        aria-label="Toggle dark mode"
        className="hover:bg-[#e9ebef] w-[2.25rem] h-[2.25rem] flex justify-center items-center mr-4 rounded-lg cursor-pointer"
      >
        <Moon size={16} />
      </button>

      {/* If user in authenticated, display the user profile. Otherwise display the sign In btn*/}
      {!user ? (
        <Button to="sign-in" variation="light" additionalClasses="px-4">
          Sign In
        </Button>
      ) : (
        <Link to="user-profile">
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
