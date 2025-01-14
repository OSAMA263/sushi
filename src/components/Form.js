import Image from "next/image";
import tw from "tailwind-styled-components";
import reserve from "../../public/reserve.jpg";
import RevealElement from "./ReavelElement";
import Curtin from "./Curtin";

export default function Form() {
  return (
    <div className="grid lg:grid-cols-3 gap-10">
      <div className="relative">
        <Curtin y="-100%" />
        <Image
          alt="img"
          className="rounded-md h-full max-lg:h-[300px] w-full"
          src={reserve}
        />
      </div>

      <div className="space-y-10 lg:col-span-2">
        <RevealElement y={20}>
          <h1 className="md:text-6xl text-4xl">Reserve Your Experience</h1>
          <p className="text-Gray">
            At Kisetsu Sushi, every detail is crafted for an exceptional
            experience. Whether savoring our omakase with loved ones or
            indulging in a special evening, reserving your table ensures a
            seamless and unforgettable dining moment.
          </p>
        </RevealElement>
        <FormInputs action="" className="">
          <RevealElement y={10}>
            <div>
              <label htmlFor="name">Name*</label>
              <input
                placeholder="Enter Name"
                name="name"
                id="name"
                required
                type="text"
              />
            </div>
            <div>
              <label htmlFor="numebr">Number of party*</label>
              <input
                placeholder="Enter Number of party"
                name="numebr-of-party"
                id="numebr-of-party"
                required
                type="number"
              />
            </div>
            <div>
              <label htmlFor="data">Date and time*</label>
              <input
                placeholder="Enter Date and time"
                name="data-and-time"
                id="data-and-time"
                required
                type="text"
              />
            </div>
            <div>
              <label htmlFor="branch">Branch</label>
              <input
                placeholder="Enter Branch"
                name="branch"
                id="branch"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone*</label>
              <input
                placeholder="Enter Phone"
                name="phone"
                id="phone"
                required
                type="number"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter Email"
                name="email"
                id="email"
                type="email"
              />
            </div>
          </RevealElement>
          <button
            aria-label="submit btn"
            type="submit"
            className="text-center text-white bg-black hover:bg-Brown rounded-sm py-2"
          >
            Reserve a table
          </button>
        </FormInputs>
      </div>
    </div>
  );
}

const FormInputs = tw.form`
grid
md:grid-cols-2
[&_div]:gap-y-2
[&_div]:flex
[&_div]:flex-col
md:gap-y-16
gap-y-6
gap-x-6
`;
