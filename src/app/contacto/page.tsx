import Image from "next/image";
import Link from "next/link";
import MenuLateral from "../components/MenuLateral";

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
            <div className="bg-gray-200 h-full p-10">
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-2 items-center justify-center h-full">
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
                <div>
                  <h1 className="text-4xl uppercase font-light pb-5">Contacto</h1>
                  <p className="text-lg">Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p>
                  <p className="text-lg">Puedes enviarnos un correo electrónico a: <a href="mailto:contacto@cadieg.com.mx" className="text-blue-500">contacto@cadieg.com.mx</a></p>
                  <p className="text-lg">O llamarnos al: <a href="tel:+5259-9999" className="text-blue-500">+52 55 5555 5555</a></p>
                  <p className="text-lg">También puedes seguirnos en nuestras redes sociales:</p>
                </div>
              </div>
              <hr/>
            </div>
          </div>
      </div>
  );
}
