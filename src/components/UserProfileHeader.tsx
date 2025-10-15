import { ArrowLeft, LogOutIcon, Pen, Save, X } from "lucide-react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import type { SubmittedUserData } from "../pages/UserProfile";
import { useUploadUserData } from "../hooks/useUploadUserData";
import Spinner from "./Spinner";
import { useSignOut } from "../hooks/useSignOut";
import { uploadUserAvatar } from "../servises/UserApi";

interface UserProfileHeaderProps {
  isEditing: boolean;
  setIsEditing: (state: boolean) => void;
  newUserInfo: SubmittedUserData;
  userAvatar: File | undefined;
  id: string;
}
function UserProfileHeader({
  isEditing,
  setIsEditing,
  newUserInfo,
  userAvatar,
  id,
}: UserProfileHeaderProps) {
  const navigate = useNavigate();
  const { isPending, updateUserData } = useUploadUserData();
  const { isPending: isSigningOut, signOutUser } = useSignOut();

  function handleSubmit(
    newUserInfo: SubmittedUserData,
    userAvatar: File | undefined
  ) {
    if (isEditing) {
      updateUserData(newUserInfo); // sets the new user data collected from all sibling components
      uploadUserAvatar(id, userAvatar as File); // sets the new user avatar if there is one
      setIsEditing(false); // exit edit mode
    } else {
      setIsEditing(true);
    }
  }

  // return a loading spinner
  if (isPending || isSigningOut) return <Spinner />;

  return (
    <header className="container flex justify-between px-4 mx-auto">
      {/* This h1 is only for screen readers and to improve SEO optimization */}
      <h1 className="sr-only">User Profile</h1>
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
        {isEditing ? (
          <Button
            type="button"
            variation="light"
            additionalClasses="gap-4 px-3 py-2 justify-center"
            link={false}
            accessibility="Reset all fields"
            onClick={() => setIsEditing(false)}
          >
            <span>
              <X size={16} />
            </span>
            <span>Cancel</span>
          </Button>
        ) : (
          <Button variation="red" link={false} onClick={signOutUser}>
            <span>
              <LogOutIcon size={16} />
            </span>
            Sign Out
          </Button>
        )}

        <Button
          link={false}
          variation="dark"
          onClick={() => handleSubmit(newUserInfo, userAvatar)}
          additionalClasses="px-3 py-2 flex gap-4 justify-center"
        >
          <span aria-hidden="true" className="">
            {isEditing ? <Save size={16} /> : <Pen size={16} />}
          </span>
          <span>{isEditing ? "Save Changes" : "Edit Profile"}</span>
        </Button>
      </div>
    </header>
  );
}

export default UserProfileHeader;
