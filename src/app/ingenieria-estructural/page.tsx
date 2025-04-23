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
    <div className="relative h-screen overflow-hidden bg-[url('/bg1.jpg')] bg-cover bg-center">
          <div className="grid grid-cols-[1fr_4fr] items-center justify-center h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
            <div className="flex flex-col items-center justify-start h-full py-5">
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
            <div className="h-full p-10 flex items-center justify-center flex-col">
              <h1 className="text-4xl uppercase font-light p-5 text-white">Ingeniería Estructural</h1>
              <hr/>
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
