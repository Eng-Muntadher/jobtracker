import { useMemo } from "react";
import StatusCard from "./StatusCard";
import { UseFetchApplications } from "../hooks/useFetchApplications";

function StatusCardList() {
  const { data: applications } = UseFetchApplications();

  // In case there is lots of data to be fetched, this useMemo is very important!
  const CardsContent = useMemo(() => {
    const accepted =
      applications?.filter((app) => app.application_status === "Accepted") ??
      [];
    const interviewing =
      applications?.filter(
        (app) => app.application_status === "Interviewing"
      ) ?? [];
    const applied =
      applications?.filter((app) => app.application_status === "Applied") ?? [];
    const rejected =
      applications?.filter((app) => app.application_status === "Rejected") ??
      [];

    return [
      { text: "Accepted", color: "#00A63E", statusCount: accepted.length },
      {
        text: "Interviewing",
        color: "#D08700",
        statusCount: interviewing.length,
      },
      { text: "Applied", color: "#155DFC", statusCount: applied.length },
      { text: "Rejected", color: "#E7000B", statusCount: rejected.length },
    ];
  }, [applications]);

  return (
    <section className="container grid grid-cols-4 gap-4 px-4 mx-auto mb-8 max-md:grid-cols-2">
      {CardsContent.map((card) => (
        <StatusCard
          key={card.text}
          color={card.color}
          text={card.text}
          statusCount={card.statusCount}
        />
      ))}
    </section>
  );
}

export default StatusCardList;
