import Logo from "./Logo";
import SignUpAndDarkMode from "./SignUpAndDarkMode";

function NavBar() {
  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="container flex items-center justify-between p-4 mx-auto"
      >
        <Logo />
        <SignUpAndDarkMode />
      </nav>
      <hr className="border-t border-gray-300" />
    </header>
  );
}

export default NavBar;
