import Image from "next/image";

const data = [
  {
    img: "/locations/location-1.jpg",
    location: "Manhattan, NY",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ 123-456-789",
  },
  {
    img: "/locations/location-2.jpg",
    location: "Los Angeles, CA",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ 123-456-789",
  },
  {
    img: "/locations/location-3.jpg",
    location: "Seattle, WA",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ 123-456-789",
  },
];

export default function Locations() {
  return (
    <div className="space-y-10">
      <h1 className="text-6xl">Our Location</h1>
      <div className="[&>div]:px-8 grid grid-cols-3 divide-x-2 divide-gray-200">
        {data.map(({ img, location, address, phone }) => (
          <div key={location} className="space-y-6 text-center">
            <Image
              alt={location}
              src={img}
              className="rounded-md"
              width={400}
              height={100}
            />
            <h1 className="text-3xl">{location}</h1>
            <p className="text-Gray">{address}</p>
            <p className="text-Gray">{phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
