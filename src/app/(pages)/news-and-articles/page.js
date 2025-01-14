import Card from "@/components/Card";
import { cards } from "./data";
import Container from "@/components/Container";
import RevealElement from "@/components/ReavelElement";

export const metadata = {
  title: "News and articles",
  description:
    "news and articles A vibrant sushi restaurant offering fresh rolls, sashimi, and a cozy, authentic dining experience.",
};

export default function News_Articles() {
  return (
    <Container className="space-y-20 sm:py-40 py-20">
      <RevealElement y={40}>
        <h1 className="md:text-6xl text-4xl">News & Articles</h1>
      </RevealElement>
      <div className="grid md:grid-cols-2 gap-10">
        {cards.map((card, i) => (
          <RevealElement
            y={60}
            key={card.title}
            className={i % 2 != 0 ? "md:mt-20" : ""}
          >
            <Card {...card} />
          </RevealElement>
        ))}
      </div>
    </Container>
  );
}
