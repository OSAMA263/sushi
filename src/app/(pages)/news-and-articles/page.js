import Card from "@/components/Card";
import Container from "@/components/Container";
import { cards } from "./data";

export default function News_Articles() {
  return (
    <Container className="space-y-8 py-40">
      <h1 className="text-6xl">News & Articles</h1>
      <div className="grid grid-cols-2 gap-10">
        {cards.map((card, i) => (
          <div key={card.title} className={i % 2 != 0 ? "mt-20 flex" : "flex"}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </Container>
  );
}
