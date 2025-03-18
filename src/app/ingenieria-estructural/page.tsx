import Image from "next/image";
import Link from "next/link";
import MenuLateral from "../components/MenuLateral";

export default function IngenieriaEstructural() {
  const servicios = [
    "Análisis y diseño estructural de estructuras en el ramo industrial, comercial, casa-habitación, cimentaciones.",
    "Análisis y diseño estructural de estructuras para el área de telecomunicaciones.",
    "Análisis y diseño estructural de depósitos de almacenamiento, tanques elevados y ductos.",
    "Análisis y diseño estructural de las obras complementarias de presas de almacenamiento de control de avenidas.",
    "Desarrollo de proyectos estructurales en acero, concreto, mampostería, madera.",
    "Análisis y diseño estructural empleando dispositivos de control de la respuesta sísmica para la protección sísmica de estructuras (aisladores de base, amortiguadores, disipadores).",
    "Análisis y diseño estructural tomando en cuenta los efectos de interacción Dinámica Suelo – Estructura.",
    "Análisis dinámicos no lineales.",
    "Asesoría especializada en temas de Interacción Dinámica Suelo – Estructura."
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
              <h1 className="text-4xl uppercase font-light pb-5">Ingeniería Estructural</h1>
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
