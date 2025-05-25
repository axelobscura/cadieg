import Image from "next/image";
import Link from "next/link";
import MenuLateral from "../components/MenuLateral";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-100">
          <div className="grid grid-cols-[1fr_3fr] items-center justify-center h-full">
            <div className="flex flex-col items-center justify-start h-full bg-gray-900 py-5">
              <Link href={"/"}>
                <Image
                  className="mb-10"
                  src="/logo.png"
                  alt="Next.js logo"
                  width={200}
                  height={38}
                  priority
                />
              </Link>
              <MenuLateral />
            </div>
            <div className="bg-gray-200 h-full p-0">
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2 items-start justify-start h-full bg-gray-950 pt-10">
                <div>
                  <div className="flex flex-col items-center justify-center h-full">
                    <a href="https://www.facebook.com/cadieg" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/contacto.jpg"
                        alt="Facebook"
                        width={500}
                        height={0}
                      />
                    </a>
                  </div>
                </div>
                <div className="text-white">
                  <h1 className="text-4xl uppercase font-bold pb-5"><FaArrowCircleRight /> Contacto</h1>
                  <hr/>
                  <p className="text-lg pt-10">Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p><br/>
                  <p className="text-lg">Puedes enviarnos un correo electrónico a:<br/><a href="mailto:contacto@cadieg.com.mx" className="text-blue-500">contacto@cadieg.com.mx</a></p>
                </div>
              </div>
              <hr/>
            </div>
          </div>
      </div>
  );
}
