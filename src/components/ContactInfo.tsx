import { Mail, MapPin, Phone } from "lucide-react";

function ContactInfo() {
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
          <p className="text-(--text-color-secondary)">john.doe@example.com</p>
        </div>
        <div>
          <h3 className="text-(--text-color) flex gap-4 items-center mb-2">
            <span aria-hidden="true">
              <Phone size={16} />
            </span>
            <span className="text-sm font-semibold">Phone</span>
          </h3>
          <p className="text-(--text-color-secondary)">+1 (555) 123-4567</p>
        </div>
        <div>
          <h3 className="text-(--text-color) flex gap-4 items-center mb-2">
            <span aria-hidden="true">
              <MapPin size={16} />
            </span>
            <span className="text-sm font-semibold">Location</span>
          </h3>
          <p className="text-(--text-color-secondary) mb-1">
            San Francisco, CA
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
