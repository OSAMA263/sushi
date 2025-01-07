import tw from "tailwind-styled-components";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function MainBtn({ children, bg = "white", ...rest }) {
  return (
    <Button {...rest} $bg={bg}>
      <HiMiniArrowUpRight id="first-i" />
      <span>{children ?? "btnnnnnnn"}</span>
      <HiMiniArrowUpRight id="second-i" />
    </Button>
  );
}

const Button = tw.button`
${({ $bg }) =>
  $bg === "black"
    ? "bg-black text-white hover:bg-Brown"
    : "bg-white text-black hover:bg-Creamy"}
flex
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
