"use client";
import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";

export default function Card(props) {
  const { tag, title, des, link, ...rest } = props;

  return (
    <Wrapper {...rest} href={link}>
      {/* TAG */}
      <span className="transition-all duration-500 px-4 py-1 rounded-md bg-white text-black absolute left-4 -translate-y-full">
        {tag}
      </span>
      <Image
        alt="card-img"
        src="/img.jpg"
        className="w-full"
        width={400}
        height={150}
      />
      <div className="px-6 py-10 space-y-8">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-Gray">{des}</p>
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
