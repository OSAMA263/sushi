import tw from "tailwind-styled-components";
import Container from "./Container";
import MainBtn from "./MainBtn";
import RevealElement from "./ReavelElement";

export default function Hero() {
  return (
    <div>
      <BG        style={{
          backgroundImage: 'url("./img.jpg")',
        }} />
      <Container className="space-y-10 h-dvh text-white flex flex-col items-start justify-end md:pb-40 pb-10">
        <RevealElement
          init={{ scale: 1.1 }}
          animate={{ scale: [1.1, 1.1, 1] }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="xl:text-[9rem] sm:text-7xl text-5xl">Kisetsu Sushi</h1>
        </RevealElement>
        <RevealElement transition={{delay:1}}>
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
        </RevealElement>
      </Container>
    </div>
  );
}
const BG = tw.div`
h-dvh
w-full
-z-10
bg-cover
absolute
bg-center
brightness-[.7]
`;
