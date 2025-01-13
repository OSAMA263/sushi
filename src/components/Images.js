import Image from "next/image";
import Img1 from "../../public/img-1.jpg";
import Img2 from "../../public/img-2.jpg";
import Img3 from "../../public/img-3.jpg";
import Img4 from "../../public/img-4.jpg";

const imgs = [Img1, Img2, Img3, Img4];

export default function Images() {
  return (
    <>
      <div className="lg:flex gap-6 grid md:grid-cols-2 mt-20 [&>img]:rounded-md">
        {imgs.map((src, i) => (
          <div key={i}>
            <Image
              className={`${
                i % 2 != 0 ? "lg:translate-y-20" : ""
              } w-full rounded-md max-lg:h-[250px] h-full`}
              src={src}
              alt={"img-" + i}
            />
          </div>
        ))}
      </div>
    </>
  );
}
// import Image from "next/image";
// import img1 from "../../public/img-1.jpg";
// import img2 from "../../public/img-2.jpg";
// import img3 from "../../public/img-3.jpg";
// import img4 from "../../public/img-4.jpg";

// const imgs = [img1, img2, img3, img4];

// export default function Images() {
//   return (
//     <div className="flex mt-20 gap-5 [&>img]:rounded-md">
//       {imgs.map((src, i) => (
//         <div key={i} className="w-[300px]">
//           <Image
//             className={`${
//               i % 2 != 0 ? "translate-y-20" : ""
//             } h-full w-full rounded-md`}
//             src={src}
//             alt={src}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
