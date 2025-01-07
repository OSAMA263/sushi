import tw from "tailwind-styled-components";

export default function Container({ children, className }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

const Wrapper = tw.div`
mx-auto
w-[70%]

`;
