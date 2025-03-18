import Image from "next/image";
import Link from "next/link";
import MenuLateral from "../components/MenuLateral";

export default function GeoIngenierias() {
  const servicios = [
    "Prospección geológica para obras civiles.",
    "Geología estructural y ambiental.",
    "Exploración somera y profunda.",
    "Muestreo en suelos y rocas.",
    "Pruebas de campo y laboratorio de mecánica de suelos y rocas.",
    "Análisis geotécnico de cimentaciones y estabilidad de taludes.",
    "Diseño de presas de almacenamiento, control de avenidas y bordos de protección.",
    "Diseño de tanques de almacenamiento para agua y combustibles, acueductos, oleoductos y gasoductos.",
    "Dinámica de suelos e ingeniería sísmica.",
    "Interacción estática y dinámica suelo-estructura.",
    "Control de calidad (terracerías y concreto).",
    "Estudios y proyectos para vías terrestres, férreas y aeropistas.",
    "Geofísica (sísmica, eléctrica, vibraciones ambientales).",
    "Geohidrología e hidrogeoquímica.",
    "Análisis de riesgo geológico, geotécnico, sísmico y geohidrológico.",
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
              <h1 className="text-4xl uppercase font-light pb-5">Geoingenierías</h1>
              <hr/>
              <ul className="p-5 list-disc text-3xl">
                {servicios.map((servicio, index) => (
                  <li key={index} className="text-xl font-light p-1">{servicio}</li>
                ))}
              </ul>
            </div>
          </div>
      </div>
  );
}
