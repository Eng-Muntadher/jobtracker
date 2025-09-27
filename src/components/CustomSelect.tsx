import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SelectOptions {
  optionsArray: string[];
  onChange: (value: string) => void;
  addedClasses?: string;
}
function CustomSelect({ optionsArray, addedClasses, onChange }: SelectOptions) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState(optionsArray[0]);

  function handleOpenCloseMenu() {
    setMenuIsOpen((state) => !state);
  }

  function handleChangeStatus(item: string) {
    onChange(item);
    setStatusFilter(item);
    setMenuIsOpen(false);
  }

  /* This useEffect checks if the user clicks inside the select btn
         or anywhere outside the drop down menu to close the menu
        */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        id="application-status"
        aria-haspopup="listbox"
        aria-expanded={menuIsOpen}
        ref={buttonRef}
        className={`bg-(--input-color) rounded-lg px-3 py-2 text-sm focus:outline-none  flex justify-between items-center cursor-pointer focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100 ${addedClasses}`}
        onClick={handleOpenCloseMenu}
      >
        <span>{statusFilter}</span>
        <span>
          {menuIsOpen ? (
            <ChevronUp size={16} color="#717182" aria-hidden />
          ) : (
            <ChevronDown size={16} color="#717182" aria-hidden />
          )}
        </span>
      </button>

      {menuIsOpen && (
        <div
          ref={dropdownRef}
          className="border border-[rgba(0,0,0,0.1)] text-sm bg-(--bg-color-1) text-(--text-color) rounded-lg absolute w-full px-1.5 py-2 flex flex-col mt-1.5 transition-all ease-in-out duration-300"
        >
          <ul role="listbox">
            {optionsArray.map((option: string) => (
              <li
                role="option"
                key={option}
                className="px-1 py-2 rounded-sm cursor-pointer hover:bg-(--input-color)"
                onClick={() => handleChangeStatus(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
