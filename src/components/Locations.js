import Image from "next/image";
import location1 from "../../public/locations/location-1.jpg";
import location2 from "../../public/locations/location-2.jpg";
import location3 from "../../public/locations/location-3.jpg";
import tw from "tailwind-styled-components";
import RevealElement from "./ReavelElement";

const data = [
  {
    img: location1,
    location: "Manhattan, NY",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ 123-456-789",
  },
  {
    img: location2,
    location: "Los Angeles, CA",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ 123-456-789",
  },
  {
    img: location3,
    location: "Seattle, WA",
    address: "123 Sakura Street, New York, NY 10014",
    phone: "+ 123-456-789",
  },
];

export default function Locations() {
  return (
    <div className="space-y-10">
      <h1 className="md:text-6xl text-4xl">Our Location</h1>
      <Wrapper>
        {data.map(({ img, location, address, phone }) => (
          <div key={location} className="overflow-hidden">
            <RevealElement x="-50%" >
              <div className="space-y-6 text-center">
              <Image
                alt={location}
                src={img}
                className="rounded-md w-full max-lg:h-[200px]"
              />
              <h1 className="sm:text-3xl text-lg">{location}</h1>
              <p className="text-Gray max-sm:text-sm">{address}</p>
              <p className="text-Gray max-sm:text-sm">{phone}</p></div>
            </RevealElement>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}
const Wrapper = tw.div`
[&>div]:lg:px-8
grid
lg:grid-cols-3
lg:divide-x-2
max-lg:gap-20
max-lg:divide-y-2
divide-gray-200
`;
