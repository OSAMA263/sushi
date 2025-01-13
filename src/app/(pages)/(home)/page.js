import Container from "@/components/Container";
import Form from "@/components/Form";
import Images from "@/components/Images";
import Locations from "@/components/Locations";
import MainBtn from "@/components/MainBtn";
import Numbers from "@/components/Numbers";
import Slider from "@/components/Slider";
import tw from "tailwind-styled-components";
import News_Articles from "../news-and-articles/page";

export default function Home() {
  return (
    <div className="lg:space-y-40 space-y-20 pb-24">
      {/* HERO */}
      <div>
        <BG />
        <Container className="space-y-10 h-dvh text-white flex flex-col items-start justify-end md:pb-40 pb-10">
          <h1 className="xl:text-[9rem] sm:text-7xl text-5xl">Kisetsu Sushi</h1>
          <p className="max-lg:text-lg max-sm:text-sm">
            Discover refined omakase at Kisetsu Sushi, where seasonal flavors
            meet masterful
            <br className="max-sm:hidden" /> Japanese artistry. Experience pure
            elegance in every bite.
          </p>
          <MainBtn
            aria-label="form contact"
            href="/reservation"
            className="max-md:w-full max-md:justify-center"
          >
            Reserve a table
          </MainBtn>
        </Container>
      </div>
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
        <MainBtn   aria-label="view artivles" className="w-fit mx-auto" href="/news-and-articles" bg="black">
          View All
        </MainBtn>
      </div>
    </div>
  );
}

const BG = tw.div`
bg-[url('/img.jpg')]
h-dvh
w-full
-z-10
bg-cover
absolute
bg-center
brightness-[.7]
`;
