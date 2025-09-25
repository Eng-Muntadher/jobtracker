import AboutMe from "../components/AboutMe";
import ContactInfo from "../components/ContactInfo";
import Skills from "../components/Skills";
import UserName from "../components/UserName";
import UserProfileCards from "../components/UserProfileCards";
import UserProfileHeader from "../components/UserProfileHeader";

function UserProfile() {
  return (
    <div className="mx-auto my-8 max-w-[930px] flex flex-col max-[400px]:flex-col-reverse gap-6">
      <UserProfileHeader />
      <div className="container flex gap-6 px-4 mx-auto max-lg:flex-col">
        <div className="w-[282.6px] flex flex-col gap-6 max-lg:w-full">
          <UserName />
          <ContactInfo />
        </div>
        <div className="flex flex-col gap-6">
          <AboutMe />
          <Skills />
          <UserProfileCards />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
