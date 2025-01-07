import Image from "next/image";

export default function Locations() {
  return (
    <div className="space-y-10">
      <h1 className="text-6xl">Our Location</h1>
      <div className="[&>div]:px-8 grid grid-cols-3 divide-x-2 divide-gray-200">
        {data.map(({ img, location, address, phone }) => (
          <div key={location} className="space-y-6 text-center">
            <Image alt={location} src="/img.jpg" className="rounded-md" width={400} height={100} />
            <h1 className="text-3xl">{location}</h1>
            <p className="text-Gray">{address}</p>
            <p className="text-Gray">{phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    img: "",
    location: "Manhattan, NY",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ (123)-456-7890",
  },
  {
    img: "",
    location: "Los Angeles, CA",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ (123)-456-7890",
  },
  {
    img: "",
    location: "Seattle, WA",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ (123)-456-7890",
  },
];
