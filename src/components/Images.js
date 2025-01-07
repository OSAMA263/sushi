import Image from "next/image";

export default function Images() {
  return (
    <div className="flex mt-20 justify-between [&>img]:rounded-md">
      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          key={i}
          className={`${i % 2 != 0 ? "translate-y-20" : ""} h-full`}
          src="/img.jpg"
          width={240}
          height={300}
          alt="img"
        />
      ))}
    </div>
  );
}
