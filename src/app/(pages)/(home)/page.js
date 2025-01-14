import Container from "@/components/Container";
import Form from "@/components/Form";
import Images from "@/components/Images";
import Locations from "@/components/Locations";
import MainBtn from "@/components/MainBtn";
import Numbers from "@/components/Numbers";
import Slider from "@/components/Slider";
import News_Articles from "../news-and-articles/page";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="lg:space-y-40 space-y-20 pb-24">
      {/* HERO */}
      <Hero />
      <Container className="lg:space-y-64 space-y-32">
        {/* IMAGES */}
        <div className="text-center">
          <p className="text-lg">
            Experience sushi that balances tradition, precision, and the
            freshest seasonal ingredients
            <br className="max-sm:hidden" /> for a taste of true Japanese
            artistry.
          </p>
          <Images />
          {/* NUMBERS */}
          <Numbers />
        </div>
        {/* SLIDER */}
        <Slider />
        {/* OUR LOCATIONS */}
        <Locations />
        {/* FORM INPUTS */}
        <Form />
      </Container>
      {/* NEWS AND ARTICLES */}
      <div>
        <News_Articles />
        <MainBtn
          aria-label="view artivles"
          className="w-fit mx-auto"
          href="/news-and-articles"
          bg="black"
        >
          View All
        </MainBtn>
      </div>
    </div>
  );
}
