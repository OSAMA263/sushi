"use client"
import tw from "tailwind-styled-components";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

export default function MainBtn(props) {
  const { children, bg = "white", as, ...rest } = props;

  return (
    <Component {...rest} href="/" $as={as??Link} $bg={bg}>
      <HiMiniArrowUpRight id="first-i" />
      <span>{children ?? "btnnnnnnn"}</span>
      <HiMiniArrowUpRight id="second-i" />
    </Component>
  );
}

const Component = tw.button`
${({ $bg }) =>
  $bg === "black"
    ? "bg-black text-white hover:bg-Brown"
    : "bg-white text-black hover:bg-Creamy"}
flex
w-fit
relative
items-center
rounded-md
px-6
py-3
capitalize
[&>#second-i]:scale-0
[&>#second-i]:hover:scale-100
[&>#first-i]:hover:scale-0
[&>span]:translate-all
[&>span]:duration-500
[&>span]:hover:-translate-x-4
[&>span]:translate-x-4
`;
