import StatusCard from "./StatusCard";

const CardsContent = [
  { text: "Applied", color: "#155DFC" },
  { text: "Interviewing", color: "#D08700" },
  { text: "Rejected", color: "#E7000B" },
  { text: "Accepted", color: "#00A63E" },
];

function StatusCardList() {
  return (
    <section className="container grid grid-cols-4 gap-4 px-4 mx-auto mb-8 max-md:grid-cols-2">
      {CardsContent.map((card) => (
        <StatusCard key={card.text} color={card.color} text={card.text} />
      ))}
    </section>
  );
}

export default StatusCardList;
