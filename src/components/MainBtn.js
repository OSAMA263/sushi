import { GoArrowUpRight } from "react-icons/go";
import tw from "tailwind-styled-components";

export default function MainBtn() {
  return (
    <Button {...rest}>

      <GoArrowUpRight id="first-i" />
      <span>{children ?? "btnnnnnnn"}</span>
      <GoArrowUpRight id="second-i" />
    </Button>
  );
}

const Button = tw.button`
flex
relative
items-center
bg-white
hover:bg-Creamy
rounded-sm
px-4
py-2
text-black
[&>#second-i]:scale-0
[&>#second-i]:hover:scale-100
[&>#first-i]:hover:scale-0
[&>span]:translate-all
[&>span]:duration-500
[&>span]:hover:-translate-x-3
[&>span]:translate-x-3
`;
