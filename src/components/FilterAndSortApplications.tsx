import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import CustomSelect from "./CustomSelect";

function FilterAndSortApplications() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const statuses = [
    "All Statuses",
    "Applied",
    "Interviewing",
    "Rejected",
    "Accepted",
  ];

  function handleOpenCloseMenu() {
    setMenuIsOpen((state) => !state);
  }

  function handleChangeStatus(item: string) {
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
    <section
      aria-label="Applications filters and actions"
      className="container mx-auto mb-6"
    >
      <div className="p-6 mx-4 border border-[rgba(0,0,0,0.1)] bg-(--bg-color-1) rounded-[0.875rem]">
        <h4 className="text-(--text-color) mb-6">Filter Applications</h4>
        <div className="flex gap-4 max-sm:flex-col">
          <div className="relative grow">
            <Search
              size={16}
              className="absolute top-2.5 left-3"
              color="#717182"
            />
            <input
              type="search"
              name="search-applications"
              id="search-applications"
              aria-describedby="search-help"
              placeholder="Search by company or job title..."
              className="bg-(--input-color) rounded-lg pr-3 pl-10 py-2 w-full text-sm focus:outline-none"
            />
          </div>

          {/* <div className="relative">
            <button
              aria-haspopup="listbox"
              aria-expanded={menuIsOpen}
              ref={buttonRef}
              className="bg-(--input-color) text-(--text-color) rounded-lg px-3 py-2 w-48 text-sm flex items-center justify-between cursor-pointer max-sm:w-full"
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
                  {statuses.map((item) => (
                    <li
                      role="option"
                      key={item}
                      className="px-1 py-2 rounded-sm cursor-pointer hover:bg-(--input-color)"
                      onClick={() => handleChangeStatus(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> */}

          <CustomSelect
            addedClasses="w-48 max-sm:w-full"
            optionsArray={["Applied", "Interviewing", "Rejected", "Accepted"]}
          />
        </div>
      </div>
    </section>
  );
}

export default FilterAndSortApplications;
