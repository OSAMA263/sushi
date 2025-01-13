import Image from "next/image";

export default function MenuSection({ data }) {
  const { section, menu, imgs } = data;

  return (
    <section id={section} className="space-y-16">
      <h1 className="text-3xl font-semibold">{section}</h1>
      <div className="space-y-6">
        {menu.map(({ name, des, price }, i) => (
          <div className="grid lg:grid-cols-4" key={i}>
            <h6 className="font-semibold">{name}</h6>
            <p className="text-Gray lg:col-span-2">{des}</p>
            <h6 className="font-semibold text-end">{price}</h6>
          </div>
        ))}
      </div>
      <div className="flex gap-4 [&>img]:rounded-md">
        {imgs.map((src, j) => (
          <Image src={src} alt="img" key={j} />
        ))}
      </div>
    </section>
  );
}
