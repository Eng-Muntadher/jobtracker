import { useUser } from "../hooks/useUser";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SignUpAndDarkMode from "./SignUpAndDarkMode";

function NavBar() {
  // Only if there is a logged in user, we display the nav links
  const { data: user } = useUser();

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="container flex items-center justify-between p-4 mx-auto"
      >
        <Logo />

        {user && <NavLinks />}
        <SignUpAndDarkMode />
      </nav>
      <hr className="border-t border-gray-300" />

      {/* In this app, we have 2 nav links. one will be shown in medium screens (width <= 768px)
       and one in larger screens (width >= 768px each with a little different layout */}
      {user && (
        <div className="md:hidden">
          <div className="container px-4 mx-auto">
            <NavLinks addedClasses="flex my-2 justify-center" />
          </div>
          <hr className="border-t border-gray-300" />
        </div>
      )}
    </header>
  );
}

export default NavBar;
