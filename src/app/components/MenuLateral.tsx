import Image from "next/image";
import Link from "next/link";

export default function MenuLateral() {
  return (
    <>
    <ul className="grid grid-cols-1 gap-4 text-left sm:flex-row sm:gap-2 w-full">
      <li>
        <Link href="/ingenieria-estructural">
        <p className="text-white font-light border-1 border-black py-3 px-3 bg-gray-950 bg-opacity-5">INGENIERÍA ESTRUCTURAL</p>
        </Link>
      </li>
      <li>
        <Link href="/geoingenierias">
        <p className="text-white font-light border-1 border-black py-3 px-3 bg-gray-950 bg-opacity-5">GEOINGENIERÍAS</p>
        </Link>
      </li>
      <li>
        <Link href="/ingenieria-ambiental">
        <p className="text-white font-light border-1 border-black py-3 px-3 bg-gray-950 bg-opacity-5">INGENIERÍA AMBIENTAL</p>
        </Link>
      </li>
      <li>
        <Link href="/capacitacion-especializada">
        <p className="text-white font-light border-1 border-black py-3 px-3 bg-gray-950 bg-opacity-5">CAPACITACIÓN ESPECIALIZADA</p>
        </Link>
      </li>
      <li>
        <Link href="/equipo-de-trabajo">
        <p className="text-white font-light border-1 border-black py-3 px-3 bg-gray-950 bg-opacity-5">EQUIPO DE TRABAJO</p>
        </Link>
      </li>
      <li>
        <Link href="/contacto">
        <p className="text-white font-light border-1 border-black py-3 px-3 bg-gray-950 bg-opacity-5">CONTACTO</p>
        </Link>
      </li>
    </ul>
    </>
  );
}
