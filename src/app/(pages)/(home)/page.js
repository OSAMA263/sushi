import MainBtn from "@/components/MainBtn";
import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <>

        <BG />
        <div className="space-y-8 h-dvh text-white flex flex-col items-start justify-end pb-40">
          <h1>Kisetsu Sushi</h1>
          <p>
            Discover refined omakase at Kisetsu Sushi, where seasonal flavors
            meet masterful Japanese artistry. Experience pure elegance in every
            bite.
          </p>
          <MainBtn />
        </div>
      </>
    </div>
  );
}

const BG = tw.div`
bg-[url('/img.jpg')]
h-dvh
w-dvw
-z-10
bg-cover
absolute
bg-center
brightness-75
`;
