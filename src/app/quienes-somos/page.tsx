import Image from "next/image";
import Link from "next/link";
import MenuLateral from "../components/MenuLateral";

export default function QuienesSomos() {
  return (
    <div className="relative h-screen overflow-hidden bg-[url('/bkg5.jpeg')] bg-cover bg-center">
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
              <h1 className="text-6xl uppercase font-bold p-5 text-white">Quienes Somos</h1>
              <hr/>
              <p className="text-white">Es una empresa 100% mexicana que ofrece una amplia gama de servicios de ingeniería altamente especializados.<br/><br/>Su enfoque principal abarca áreas fundamentales de la ingeniería civil como el diseño estructural, geología, geotecnia, geofísica y geohidrología, así como de la ingeniería ambiental aplicada a las obras civiles.</p><br/>
              <p className="text-white">La empresa se destaca por su enfoque interdisciplinario en la ejecución de proyectos y por su capacidad para abordar desafíos complejos a través de la combinación de conocimientos, ofreciendo soluciones integrales considerando aspectos estructurales y ambientales dentro de la normatividad correspondiente.</p>
            </div>
          </div>
      </div>
  );
}
