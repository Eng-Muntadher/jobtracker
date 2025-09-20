import { Calendar, DollarSign, MapPin } from "lucide-react";

function JobInfoCard() {
  return (
    <section aria-labelledby="job-details" className="custom-border">
      <div className="flex justify-between mb-[1.85rem]">
        <div>
          <h4 className="text-(--text-color) text-3xl mb-2" id="job-details">
            Amazon
          </h4>
          <p className="text-(--text-color-secondary) text-xl">
            Software Engineer
          </p>
        </div>
        <span className="text-xs font-semibold bg-(--interviewing-status-bg) text-(--interviewing-status-color) py-0.5 px-2 rounded-lg h-fit">
          Interviewing
        </span>
      </div>

      <div>
        <div className="flex mb-4 gap-28 max-lg:gap-48 max-md:flex-col max-md:gap-4">
          <p className="flex gap-2 text-(--text-color-secondary) items-center">
            <span aria-hidden="true">
              <MapPin size={16} />
            </span>
            Mountain View. CA
          </p>
          <p
            aria-label="date-applied"
            className="flex gap-2 text-(--text-color-secondary) items-center"
          >
            <span aria-hidden="true">
              <Calendar size={16} />
            </span>
            Applied <time dateTime="2024-01-15">1/15/2024</time>
          </p>
        </div>

        <p className="flex gap-2 text-(--text-color-secondary) items-center">
          <span aria-hidden="true">
            <DollarSign size={16} />
          </span>
          $150,000 - $200,000
        </p>
      </div>
    </section>
  );
}

export default JobInfoCard;
