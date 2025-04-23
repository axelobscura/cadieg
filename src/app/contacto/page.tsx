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
              <h1 className="text-4xl uppercase font-light pb-5">Contacto</h1>
              <hr/>
            </div>
          </div>
      </div>
  );
}
