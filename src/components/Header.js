"use client";
import tw from "tailwind-styled-components";
import Container from "./Container";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logoDark from "../../public/logo-dark.png";
import logoWhite from "../../public/logo-white.png";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  return (
    <Wrapper>
      <Container>
        <nav className="flex justify-between items-center ">
          <Link href="/" className="[&>img]:hover:brightness-75">
            <Image
              src={pathname != "/" ? logoDark : logoWhite}
              alt="logo"
              priority
              width={80}
            />
          </Link>
          <NavLinks $active={toggle}>
            <Container className="flex justify-between items-start">
              <ul className="space-y-6 text-xl font-semibold">
                {links.map(({ link, url }) => (
                  <li key={url}>
                    <Link
                      className={`${
                        pathname === url ? "text-Creamy" : "text-Gray"
                      } hover:text-Brown`}
                      href={url}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                aria-label="close nav links"
                className="text-3xl [&>svg]:hover:text-Gray text-black"
                onClick={() => setToggle(false)}
              >
                <IoClose />
              </button>
            </Container>
          </NavLinks>
          <button
            aria-label="open nav links"
            onClick={() => setToggle(true)}
            className={`${
              pathname === "/" ? "text-white" : "text-black"
            } text-3xl [&>svg]:hover:text-Gray`}
          >
            <IoMenuOutline />
          </button>
        </nav>
      </Container>
    </Wrapper>
  );
}

const NavLinks = tw.div`
${({ $active }) => ($active ? "!translate-y-0" : "!-translate-y-[150%]")}
absolute
w-full
bg-white
left-0
transition-all
top-0
py-10
z-[6969]
duration-300
shadow-2xl
`;

const Wrapper = tw.header`
absolute
text-white
w-full
backdrop-blur-md
py-6
z-[69]
`;

export const links = [
  {
    url: "/",
    link: "Home",
  },
  {
    url: "/menu",
    link: "Menu",
  },
  {
    url: "/news-and-articles",
    link: "News",
  },
  {
    url: "/reservation",
    link: "Reservation",
  },
];
