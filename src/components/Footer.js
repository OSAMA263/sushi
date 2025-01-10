import Image from "next/image";
import Container from "./Container";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-Creamy py-28 ">
      <Container className="flex justify-between items-center">
        <div className="space-y-4">
          <Image src="/img.jpg" alt="logo" width={40} height={40} />
          <h6>hello-kisetsu-sushi@email.com</h6>
          <h6>+1 206-123-1234</h6>
          <div className="flex gap-2 text-3xl hover:[&>svg]:text-Brown hover:[&>svg]:cursor-pointer text-black">
            <FaLinkedin />
            <FaFacebookSquare />
          </div>
        </div>
        <div className="space-y-4">
          {/* linkes from the header */}
        </div>
      </Container>
    </footer>
  );
}
