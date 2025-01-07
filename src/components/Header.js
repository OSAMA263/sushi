import tw from "tailwind-styled-components";
import Container from "./Container";
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="[&>img]:hover:brightness-75">
            <Image src="/img.jpg" width={40} height={20} alt="logo" priority />
          </Link>
          <button className="text-3xl [&>svg]:hover:text-Gray">
            <IoMenuOutline />
          </button>
        </nav>
      </Container>
    </Wrapper>
  );
}

const Wrapper = tw.header`
absolute
text-white
w-full
backdrop-blur-md
py-6
`;
