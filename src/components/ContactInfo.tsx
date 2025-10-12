import { Mail, MapPin, Phone } from "lucide-react";
import Input from "./Input";
import type { SubmittedUserData } from "../pages/UserProfile";

interface ContactInfoProps {
  email: string | null;
  phoneNumber: string | undefined;
  location: string;
  isEditing: boolean;
  handleChange: <K extends keyof SubmittedUserData>(
    name: K,
    value: SubmittedUserData[K]
  ) => void;
}
function ContactInfo({
  email,
  phoneNumber,
  location,
  isEditing,
  handleChange,
}: ContactInfoProps) {
  if (isEditing)
    return (
      <section className="custom-border">
        <h2 className="text-(--text-color) mb-7">Contact Information</h2>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-(--text-color) flex gap-4 items-center mb-2">
              <span aria-hidden="true">
                <Mail size={16} />
              </span>
              <span className="text-sm font-semibold">Email</span>
            </h3>
            <p className="text-(--text-color-secondary)">{email}</p>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-(--text-color) flex gap-4 items-center mb-2"
            >
              <span aria-hidden="true">
                <Phone size={16} />
              </span>
              <span className="text-sm font-semibold">Phone</span>
            </label>

            <Input
              id="phone"
              type="text"
              name="phone"
              addedClasses="text-sm w-full"
              defaultValue={phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                // set the user info state in the parent
                handleChange("phone", e.target.value)
              }
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="text-(--text-color) flex gap-4 items-center mb-2"
            >
              <span aria-hidden="true">
                <MapPin size={16} />
              </span>
              <span className="text-sm font-semibold">Location</span>
            </label>
            <Input
              id="location"
              type="text"
              name="location"
              addedClasses="text-sm w-full"
              defaultValue={location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                // set the user info state in the parent
                handleChange("location", e.target.value)
              }
            />
          </div>
        </div>
      </section>
    );

  return (
    <section className="custom-border">
      <h2 className="text-(--text-color) mb-7">Contact Information</h2>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-(--text-color) flex gap-4 items-center mb-2">
            <span aria-hidden="true">
              <Mail size={16} />
            </span>
            <span className="text-sm font-semibold">Email</span>
          </h3>
          <p className="text-(--text-color-secondary)">{email}</p>
        </div>

        <div>
          <h3 className="text-(--text-color) flex gap-4 items-center mb-2">
            <span aria-hidden="true">
              <Phone size={16} />
            </span>
            <span className="text-sm font-semibold">Phone</span>
          </h3>
          <p className="text-(--text-color-secondary)">
            {phoneNumber || "Add a phone number"}
          </p>
        </div>
        <div>
          <h3 className="text-(--text-color) flex gap-4 items-center mb-2">
            <span aria-hidden="true">
              <MapPin size={16} />
            </span>
            <span className="text-sm font-semibold">Location</span>
          </h3>
          <p className="text-(--text-color-secondary) mb-1">
            {location || "Add your location"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
