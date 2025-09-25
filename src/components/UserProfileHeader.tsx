import { ArrowLeft, LogOutIcon, Pen } from "lucide-react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function UserProfileHeader() {
  const navigate = useNavigate();

  return (
    <header className="container flex justify-between px-4 mx-auto">
      <button
        className="flex text-(--text-color) items-center gap-4 cursor-pointer max-[400px]:hidden hover:text-(--text-color-secondary)"
        onClick={() => navigate(-1)}
      >
        <span aria-hidden="true">
          <ArrowLeft size={16} />
        </span>
        <span className="text-sm font-semibold">Back</span>
      </button>
      <div className="flex gap-2 max-[400px]:flex-col-reverse max-[400px]:w-full">
        <Button variation="red" link={false} onClick={() => {}}>
          <span>
            <LogOutIcon size={16} />
          </span>
          Sign Out
        </Button>
        <Button
          link={false}
          variation="dark"
          onClick={() => {}}
          additionalClasses="px-3 py-2 flex gap-4 justify-center"
        >
          <span aria-hidden="true" className="">
            <Pen size={16} />
          </span>
          <span>Edit Profile</span>
        </Button>
      </div>
    </header>
  );
}

export default UserProfileHeader;
