import Image from "next/image";
import Container from "./Container";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import logo from "../../public/logo-dark.png";
import { Links } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-gray-600 py-28 ">
      <Container className="flex justify-between items-center">
        <div className="space-y-4">
          <Image src={logo} alt="logo" width={60} height={40} />
          <h6>hello-kisetsu-sushi@email.com</h6>
          <h6>+20 112-145-130-6</h6>
          <div className="flex gap-2 text-3xl hover:[&>svg]:text-Brown hover:[&>svg]:cursor-pointer text-black">
            <FaLinkedin />
            <FaFacebookSquare />
          </div>
        </div>
        <div className="space-y-4">
          <ul>
            <Links />
          </ul>
        </div>
      </Container>
    </footer>
  );
}
