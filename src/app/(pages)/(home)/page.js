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
    <div className="space-y-40 pb-24">
      {/* HERO */}
      <div>
        <BG />
        <Container className="space-y-10 h-dvh text-white flex flex-col items-start justify-end pb-40">
          <h1 className="text-[9rem]">Kisetsu Sushi</h1>
          <p className="text-lg">
            Discover refined omakase at Kisetsu Sushi, where seasonal flavors
            meet masterful
            <br /> Japanese artistry. Experience pure elegance in every bite.
          </p>
          <MainBtn href="/reservation">Reserve a table</MainBtn>
        </Container>
      </div>
      <Container className="space-y-64">
        {/* IMAGES */}
        <div className="text-center">
          <p className="text-lg">
            Experience sushi that balances tradition, precision, and the
            freshest seasonal ingredients
            <br /> for a taste of true Japanese artistry.
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
        <MainBtn className="w-fit mx-auto" href="/" bg="black">
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
