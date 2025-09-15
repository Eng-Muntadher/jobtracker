import { Moon } from "lucide-react";
import Button from "./Button";

function SignUpAndDarkMode() {
  return (
    <div className="flex items-center justify-center">
      <div className="hover:bg-[#e9ebef] w-[2.25rem] h-[2.25rem] flex justify-center items-center mr-4 rounded-lg cursor-pointer">
        <Moon size={16} />
      </div>
      <Button
        variation="light"
        additionalClasses="px-4"
        onClick={() => console.log("Nav Clicked")}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default SignUpAndDarkMode;
