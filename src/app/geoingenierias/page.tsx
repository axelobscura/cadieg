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
    <div className="relative h-screen overflow-hidden bg-[url('/bg2.jpg')] bg-cover bg-center">
          <div className="grid grid-cols-[1fr_4fr] items-center justify-center h-full" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
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
              <h1 className="text-4xl uppercase font-light p-5 text-white">Geoingenierías</h1>
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
