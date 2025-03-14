import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-900 to-blue-950 justify-center">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Next.js logo"
          width={300}
          height={38}
          priority
        />
        <div>
          <ul className="flex flex-col gap-4 text-center sm:flex-row sm:gap-8">
            <li>
              <Link href="/about">
              <p className="text-white font-light border-1 border-blue-900 py-3 px-3">INGENIERÍA ESTRUCTURAL</p>
              </Link>
            </li>
            <li>
              <Link href="/geoingenierias">
              <p className="text-white font-light border-1 border-blue-900 py-3 px-3">GEOINGENIERÍAS</p>
              </Link>
            </li>
            <li>
              <Link href="/ingenieria-ambiental">
              <p className="text-white font-light border-1 border-blue-900 py-3 px-3">INGENIERÍA AMBIENTAL</p>
              </Link>
            </li>
            <li>
              <Link href="/capacitacion-especializada">
              <p className="text-white font-light border-1 border-blue-900 py-3 px-3">CAPACITACIÓN ESPECIALIZADA</p>
              </Link>
            </li>
            <li>
              <Link href="/equipo-de-trabajo">
              <p className="text-white font-light border-1 border-blue-900 py-3 px-3">EQUIPO DE TRABAJO</p>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
              <p className="text-white font-light border-1 border-blue-900 py-3 px-3">CONTACTO</p>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
