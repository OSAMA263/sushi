import Image from "next/image";
import tw from "tailwind-styled-components";

export default function Form() {
  return (
    <div className="grid grid-cols-3 gap-x-10">
      <Image
        alt="img"
        src="/img.jpg"
        className="rounded-md h-full w-full"
        width={400}
        height={800}
      />
      <div className="space-y-10 col-span-2">
        <h1 className="text-6xl">Reserve Your Experience</h1>
        <p className="text-Gray">
          At Kisetsu Sushi, every detail is crafted for an exceptional
          experience. Whether savoring our omakase with loved ones or indulging
          in a special evening, reserving your table ensures a seamless and
          unforgettable dining moment.
        </p>
        <FormInputs action="" className="">
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
          <button
            type="submit"
            className="text-center text-white bg-black hover:bg-Brown rounded-sm py-2"
          >
            tbn
          </button>
        </FormInputs>
      </div>
    </div>
  );
}

const FormInputs = tw.form`
grid
grid-cols-2
[&>div]:gap-y-2
[&>div]:flex
[&>div]:flex-col
gap-y-16
gap-x-6
`;
