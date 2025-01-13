"use client";
import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";

export default function Card(props) {
  const { tag, title, des, img, link, ...rest } = props;

  return (
    <Wrapper {...rest} href={link}>
      {/* TAG */}
      <span className="transition-all duration-500 px-4 py-1 rounded-md bg-white text-black absolute left-4 -translate-y-full">
        {tag}
      </span>
      <Image
        alt={title}
        src={img}
        width={600}
        height={260}
      />
      <div className="sm:px-6 sm:py-10 p-2 sm:space-y-8 space-y-2">
        <h1 className="md:text-2xl text-lg font-semibold">{title}</h1>
        <p className="text-Gray max-sm:text-sm">{des}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = tw(Link)`
relative
overflow-hidden
rounded-md
flex
flex-col
[&>span]:hover:translate-y-4
border
hover:shadow-2xl
hover:-translate-y-1
transition-all
duration-500
`;
