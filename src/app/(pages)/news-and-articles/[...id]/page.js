import Container from "@/components/Container";
import Image from "next/image";
import { notFound } from "next/navigation";
import { data } from "./data";
import Card from "@/components/Card";
import { cards } from "../data";

export default async function SingleArticle({ params }) {
  const { id } = await params;
  const article = data.find((article) => article.id === id[0]);

  if (!article) {
    notFound();
  }

  const { title, des, name, ingredients,img } = article;

  return (
    <Container className="py-40 space-y-40">
      <div className="space-y-12 [&_h6]:font-semibold">
        <h1 className="text-5xl">{name}</h1>
        <p>January 20, 2025</p>
        <Image
          src={img}
          className="rounded-md w-full"
          alt="title"
          width={1000}
          height={600}
        />
        <h6 className="text-2xl">{title}</h6>
        <p>{des}</p>
        <h6 className="text-2xl">The ingredients</h6>
        <ul className="list-disc">
          {ingredients?.map((item) =>
            item.name ? (
              <li className="ms-12" key={item.name}>
                <div className="flex gap-1">
                  <h6>{item.name}:</h6>
                  <p>{item.details}</p>
                </div>
              </li>
            ) : (
              item
            )
          )}
        </ul>
      </div>
      {/* OTHER ARTICLES */}
      <div className="space-y-10">
        <h1 className="text-4xl">You may also like...</h1>
        <div className="grid grid-cols-3 gap-4">
          {cards
            .filter((card) => card.id != id)
            .map((card) => (
              <Card {...card} key={card.id} />
            ))}
        </div>
      </div>
    </Container>
  );
}
