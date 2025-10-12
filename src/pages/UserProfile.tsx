import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import ContactInfo from "../components/ContactInfo";
import Skills from "../components/Skills";
import UserName from "../components/UserName";
import UserProfileHeader from "../components/UserProfileHeader";
import UserProfileCard from "../components/UserProfileCard";
import { Book, Briefcase } from "lucide-react";
import { useUser } from "../hooks/useUser";

export interface SubmittedUserData {
  userName: string;
  phone: string;
  location: string;
  aboutMe: string;
  skills: string[];
  education: string;
  experience: string;
  userAvatar: string;
}

const initialState = {
  userName: "",
  phone: "",
  location: "",
  aboutMe: "",
  skills: [],
  education: "",
  experience: "",
  userAvatar: "",
};

function UserProfile() {
  // fetch the current user info from Supabase
  const { data: userInfo } = useUser();

  // this state indicates if the component is in edit mode or not
  const [isEditing, setIsEditing] = useState<boolean>(false);

  /* This is a state that represents the user's new avatar (if there is one) and
   is set by a child component and submitted by another child component */
  const [userAvatar, setUserAvatar] = useState<File>();

  /* A new state seperate from the real user data and is set by all children components
    submitted with new data by a child component */
  const [newUserInfo, setNewUserInfo] =
    useState<SubmittedUserData>(initialState);

  // our fetch is asychronous, so we need to set the state when data arrives
  useEffect(() => {
    if (userInfo) {
      setNewUserInfo((state) => {
        return {
          ...state,
          userName: userInfo.user_metadata.userName,
          phone: userInfo.user_metadata.phone,
          location: userInfo.user_metadata.location,
          aboutMe: userInfo.user_metadata.aboutMe,
          skills: userInfo.user_metadata.skills,
          education: userInfo.user_metadata.education,
          experience: userInfo.user_metadata.experience,
          userAvatar: userInfo.user_metadata?.avatarUrl,
        };
      });
    }
  }, [userInfo, isEditing]);

  // A generic function used to update the state and accepts only valid field names
  const handleChange = <K extends keyof SubmittedUserData>(
    name: K,
    value: SubmittedUserData[K]
  ) => {
    setNewUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto my-8 max-w-[930px] flex flex-col max-[400px]:flex-col-reverse gap-6">
      {/* This component does all the submitting when in edit mode */}
      <UserProfileHeader
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        newUserInfo={newUserInfo}
        userAvatar={userAvatar}
        id={userInfo?.id || ""}
      />
      <div className="container flex gap-6 px-4 mx-auto max-lg:flex-col">
        <div className="w-[282.6px] flex flex-col gap-6 max-lg:w-full">
          <UserName
            userName={userInfo?.user_metadata.userName}
            isEditing={isEditing}
            handleChange={handleChange}
            userAvatar={userInfo?.user_metadata?.publicUrl}
            setUsetAvatar={setUserAvatar}
          />
          <ContactInfo
            email={userInfo?.email || null}
            phoneNumber={userInfo?.user_metadata.phone}
            location={userInfo?.user_metadata.location}
            isEditing={isEditing}
            handleChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-6 w-[590px] max-lg:w-full">
          <AboutMe
            aboutMeText={userInfo?.user_metadata.aboutMe}
            isEditing={isEditing}
            handleChange={handleChange}
          />
          <Skills
            skillsSet={userInfo?.user_metadata.skills || []}
            isEditing={isEditing}
            handleChange={handleChange}
          />
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <UserProfileCard
              heading="Experience"
              text={userInfo?.user_metadata.experience}
              icon={Briefcase}
              isEditing={isEditing}
              initialValue={userInfo?.user_metadata.experience}
              id="experience"
              handleChange={handleChange}
              placeHolder="Add experience"
            />
            <UserProfileCard
              heading="Education"
              text={userInfo?.user_metadata.education}
              icon={Book}
              isEditing={isEditing}
              initialValue={userInfo?.user_metadata.education}
              id="education"
              handleChange={handleChange}
              placeHolder="Add Education"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
