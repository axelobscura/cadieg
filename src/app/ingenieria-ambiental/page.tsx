import Image from "next/image";
import Link from "next/link";
import MenuLateral from "../components/MenuLateral";

export default function IngenieriaAmbiental() {
  const servicios = [
    "Estudios y proyectos ejecutivos para la construcción de rellenos sanitarios.",
    "Estudios y proyectos ejecutivos para la construcción de PTAR’s.",
    "Estudios y proyectos ejecutivos para la construcción de pozos de aprovechamiento hidráulico y de infiltración.",
    "Ecotécnias en agua y saneamiento alternativo.",
    "Análisis de riesgo hidrológico y geohidrológico."
  ];
  return (
    <div className="relative h-screen overflow-hidden bg-gray-100">
          <div className="grid grid-cols-[1fr_3fr] items-center justify-center h-full">
            <div className="flex flex-col items-center justify-start h-full bg-gray-900 py-5">
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
            <div className="bg-gray-200 h-full p-10">
              <h1 className="text-4xl uppercase font-light pb-5">Ingeniería Ambiental</h1>
              <hr/>
              <ul className="p-5 list-disc text-3xl pt-5">
                {servicios.map((servicio, index) => (
                  <li key={index} className="text-xl font-light p-1">{servicio}</li>
                ))}
              </ul>
            </div>
          </div>
      </div>
  );
}
