import Container from "@/components/Container";
import MenuSection from "./MenuSection";
import { menu_data } from "./data";

export const metadata = {
  title: "Menu",
  description:
    "Menu A vibrant sushi restaurant offering fresh rolls, sashimi, and a cozy, authentic dining experience.",
};

export default function Menu() {
  return (
    <Container className="py-28 space-y-20">
      <h1 className="md:text-6xl text-4xl font-semibold">Our Menu</h1>
      <div className="relative flex gap-x-20">
        {/* STICKY SIDE DIV */}
        <ul className="space-y-10 sticky h-fit top-20 min-w-max max-lg:hidden">
          {menu_data.map(({ section }) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
        {/* MENU SECTIONS */}
        <div className="space-y-32">
          {menu_data.map((menu) => (
            <MenuSection key={menu.section} data={menu} />
          ))}
        </div>
      </div>
    </Container>
  );
}
