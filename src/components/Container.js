import tw from "tailwind-styled-components";

export default function Container({ children, className }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

const Wrapper = tw.div`
mx-auto
2xl:w-[75%]
xl:w-[85%]
md:w-[90%]
w-[96%]
`;
