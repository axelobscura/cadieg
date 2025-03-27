import Image from "next/image";
import Link from "next/link";
import MenuLateral from "../components/MenuLateral";

export default function CapacitacionEspecializada() {
  const servicios = [
    "Geología y geotecnia",
    "Estructuras",
    "Ingeniería sísmica",
    "Sistemas de información geográfica",
    "Geohidrología",
    "Ciudades y Medio Ambiente"
  ];
  return (
    <div className="relative h-screen overflow-hidden bg-[url('/bg4.jpg')] bg-cover bg-center">
      <div
        className="grid grid-cols-[1fr_4fr] items-center justify-center h-full"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="flex flex-col items-center justify-start h-full py-5">
          <Link href={"/"}>
            <Image
              className="dark:invert mb-10"
              src="/logo.png"
              alt="Next.js logo"
              width={200}
              height={38}
              priority
            />
          </Link>
          <MenuLateral />
        </div>
        <div className="h-full p-10 flex items-center justify-center flex-col">
          <h1 className="text-4xl uppercase font-light pb-5 text-white">
            Capacitación Especializada
          </h1>
          <hr />
          <p className="text-xl font-light p-1 mt-5 text-white">
            Capacitación técnica especializada y servicios relacionados con la
            formación de recursos humanos para los sectores público, privado y
            social en áreas relacionadas con:
          </p>
          <div className="list-disc text-3xl p-10 px-20 grid grid-cols-3 gap-5">
              {servicios.map((servicio, index) => (
                <div key={index} className="text-sm font-light text-white flex justify-content-center items-center p-5 text-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>{servicio}</div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
