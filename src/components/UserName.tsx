import UserImage from "../images/userImg.png";

function UserName() {
  return (
    <section className="flex gap-[1.37rem] flex-col py-6 pt-6 pb-10 custom-border-no-padding items-center">
      <img src={UserImage} alt="Profile picture" height={96} width={96} />
      <h2 className="text-(--text-color)">John Doe</h2>
    </section>
  );
}

export default UserName;
