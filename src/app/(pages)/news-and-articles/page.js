import Card from "@/components/Card";
import { cards } from "./data";
import Container from "@/components/Container";

export default function News_Articles() {
  return (
    <Container className="space-y-20 py-40">
      <h1 className="text-6xl">News & Articles</h1>
      <div className="grid grid-cols-2 gap-10">
        {cards.map((card, i) => (
          <div key={card.title} className={i % 2 != 0 ? "mt-20" : ""}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </Container>
  );
}
