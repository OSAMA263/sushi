import Container from "@/components/Container";
import Form from "@/components/Form";
import Images from "@/components/Images";
import Locations from "@/components/Locations";
import MainBtn from "@/components/MainBtn";
import News from "@/components/Article";
import Numbers from "@/components/Numbers";
import Slider from "@/components/Slider";
import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <div className="space-y-40">
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
          <MainBtn />
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
        {/* NEWS AND ARTICLES */}
        <News />
      </Container>
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
