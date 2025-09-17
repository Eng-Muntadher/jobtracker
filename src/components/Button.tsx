import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children?: string | ReactNode;
  onClick: () => void;
  additionalClasses?: string;
  variation: "light" | "dark";
  to: string;
  accessibility?: object; ////////////////
}

type BtnVariation = {
  light: string;
  dark: string;
};

function Button({
  additionalClasses,
  onClick,
  children,
  variation,
  to,
}: ButtonProps) {
  const variations: BtnVariation = {
    light:
      "text-(--text-color) bg-(--bg-color-1) border-[rgba(0,0,0,0.1)] hover:bg-[#e9ebef]",
    dark: "text-(--text-color-2) bg-(--bg-color-2) hover:bg-[#2d2d2d]",
  };

  return (
    <Link
      to={to}
      className={`text-center text-sm font-semibold py-2 rounded-lg border flex items-center ${variations[variation]} cursor-pointer ${additionalClasses}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default Button;
