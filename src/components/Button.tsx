import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children?: string | ReactNode;
  onClick: () => void;
  additionalClasses?: string;
  variation: "light" | "dark";
  to?: string;
  type?: "button" | "submit" | "reset";
  accessibility?: string; // In this btn, we usually just need Aria label for accessibility
  link?: boolean;
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
  to = "#",
  type = "button",
  link = true,
  accessibility,
}: ButtonProps) {
  const btnClasses =
    "cursor-pointer text-center text-sm font-semibold py-2 rounded-lg border flex items-center";

  const variations: BtnVariation = {
    light:
      "text-(--text-color) bg-(--bg-color-1) border-[rgba(0,0,0,0.1)] hover:bg-[#e9ebef]",
    dark: "text-(--text-color-2) bg-(--bg-color-2) hover:bg-[#2d2d2d]",
  };

  return link ? (
    <Link
      to={to}
      className={`${btnClasses} ${variations[variation]} ${additionalClasses}`}
      onClick={onClick}
      aria-label={accessibility}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${btnClasses} ${variations[variation]} ${additionalClasses}`}
      onClick={onClick}
      type={type}
      aria-label={accessibility}
    >
      {children}
    </button>
  );
}

export default Button;
