import Image from "next/image";

export default function Images() {
  return (
    <div className="flex mt-20 gap-5 [&>img]:rounded-md">
      {imgs.map((src, i) => (
        <div key={i}>
          <Image
            className={`${
              i % 2 != 0 ? "translate-y-20" : ""
            } h-full w-full rounded-md`}
            src={src}
            width={300}
            height={415}
            alt={src}
          />
        </div>
      ))}
    </div>
  );
}

const imgs = [
  "/img-1.jpg",
  "/img-2.jpg",
  "/img-3.jpg",
  "/img-4.jpg",
  "/img-5.jpg",
];
