import Container from "@/components/Container";
import Form from "@/components/Form";
import Locations from "@/components/Locations";

export const metadata = {
  title: "Reservation",
  description:
    "Reservation A vibrant sushi restaurant offering fresh rolls, sashimi, and a cozy, authentic dining experience.",
};

export default function Reservation() {
  return (
    <Container className="py-32 space-y-40">
      <Form />
      <Locations />
    </Container>
  );
}
