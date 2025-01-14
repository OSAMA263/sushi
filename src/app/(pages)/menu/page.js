import Container from "@/components/Container";
import MenuSection from "./MenuSection";
import { menu_data } from "./data";
import SectionsLinks from "./SectionsLinks";

export const metadata = {
  title: "Menu",
  description:
    "Menu A vibrant sushi restaurant offering fresh rolls, sashimi, and a cozy, authentic dining experience.",
};

export default function Menu() {
  return (
    <Container className="py-28 space-y-20">
      <h1 className="md:text-6xl text-4xl font-semibold">Our Menu</h1>
      <div className="relative flex gap-x-28">
        {/* STICKY SIDE DIV */}
        <SectionsLinks/>
        {/* MENU SECTIONS */}
        <div className="space-y-32">
          {menu_data.map((menu, i) => (
            <MenuSection key={menu.section} i={i} data={menu} />
          ))}
        </div>
      </div>
    </Container>
  );
}
