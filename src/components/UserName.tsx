import { Plus } from "lucide-react";
import GuestImage from "../images/guest.jpeg";
import type { SubmittedUserData } from "../pages/UserProfile";
import Input from "./Input";
import { useEffect, useRef, useState } from "react";

interface UserNameProps {
  userName: string;
  isEditing: boolean;
  userAvatar: string;
  setUsetAvatar: React.Dispatch<React.SetStateAction<File | undefined>>;
  handleChange: <K extends keyof SubmittedUserData>(
    name: K,
    value: SubmittedUserData[K]
  ) => void;
}

function UserName({
  userName,
  isEditing,
  handleChange,
  userAvatar,
  setUsetAvatar,
}: UserNameProps) {
  // this is a local state for the avatar and resets when isEditing changes
  const [localUserAvatar, setLocalUserAvatar] = useState<string>("");

  // this state controls the actual image that may be uploaded to Supabase if the submit btn is clicked
  const [userAvatarState, setUserAvatarState] = useState<string>(userAvatar);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // if there is a user image, display it. Otherwise, display the guest image
  const displayedImage = userAvatarState ? userAvatarState : GuestImage;

  // since our data is asychronous, we reset it when it arrives
  useEffect(() => {
    setUserAvatarState(userAvatar);
  }, [userAvatar]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // this creates a temporary local URL that points to the file in the browser memory
      const previewUrl = URL.createObjectURL(file);
      setLocalUserAvatar(previewUrl);
      setUsetAvatar(file); // lift the state up to be submitted later
    }
  };

  // reset local avatar state when isEditing changes
  useEffect(() => {
    setLocalUserAvatar("");
  }, [isEditing]);

  if (isEditing)
    return (
      <section className="flex gap-[1.37rem] flex-col py-6 pt-6 pb-10 custom-border items-center">
        <div className="relative">
          <label
            tabIndex={0}
            htmlFor="avatar-upload"
            aria-label="Change profile picture"
            onKeyDown={(e) => {
              // custom enter key and focus support on the label element for accessibility
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            className="relative block overflow-hidden rounded-full cursor-pointer focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary)"
          >
            <img
              src={localUserAvatar || displayedImage}
              className="object-cover w-24 h-24 rounded-full"
              alt="Profile picture"
            />

            <div className="absolute inset-0 flex items-center justify-center transition rounded-full opacity-0 bg-black/40 hover:opacity-100">
              <span className="text-sm text-white">Change</span>
            </div>

            {/* Hidden file input */}
            <input
              id="avatar-upload"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="sr-only"
            />
          </label>
          <span
            aria-hidden="true"
            className="text-(--text-color-2) bg-(--bg-color-2) h-7 w-7 flex items-center justify-center rounded-full absolute bottom-0 right-0"
          >
            <Plus size={16} aria-hidden="true" />
          </span>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="user-name" className="text-sm font-medium">
            Full Name
          </label>
          <Input
            id="user-name"
            name="UserName"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("userName", e.target.value)
            }
            defaultValue={userName}
            addedClasses="text-sm"
          />
        </div>
      </section>
    );
  return (
    <section className="flex gap-[1.37rem] flex-col py-6 pt-6 pb-10 custom-border-no-padding items-center">
      <img
        src={localUserAvatar || displayedImage}
        className="object-cover w-24 h-24 rounded-full"
        alt="Profile picture"
      />
      <h2 className="text-(--text-color)">
        {userName || (
          <span className="text-(--text-color-secondary)">Add Username</span>
        )}
      </h2>
    </section>
  );
}

export default UserName;
