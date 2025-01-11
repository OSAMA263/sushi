"use client";
import tw from "tailwind-styled-components";
import Container from "./Container";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  return (
    <Wrapper>
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="[&>img]:hover:brightness-75">
            <Image
              src={pathname === "/" ? "/logo-white.png" : "/logo-dark.png"}
              width={80}
              height={20}
              alt="logo"
              priority
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
                className="text-3xl [&>svg]:hover:text-Gray text-black"
                onClick={() => setToggle(false)}
              >
                <IoClose />
              </button>
            </Container>
          </NavLinks>
          <button
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
${({ $active }) => ($active ? "!translate-y-0" : "!-translate-y-full")}
absolute
w-full
bg-white
left-0
transition-all
top-0
py-10
duration-300
`;

const Wrapper = tw.header`
absolute
text-white
w-full
backdrop-blur-md
py-6
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
