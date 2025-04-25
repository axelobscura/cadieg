import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-950">
          <video src="https://videos.pexels.com/video-files/1197802/1197802-hd_1920_1080_25fps.mp4" className="absolute z-10 w-auto min-w-full min-h-full max-w-none" style={{
            filter: 'white(100%)',
            opacity: '0.3',
          }} autoPlay loop muted></video>
          <div className="relative z-20 flex flex-col items-center justify-center h-full">
            <Image
              className="mb-10"
              src="/logo.png"
              alt="CADIEG - Centro de Análisis y Diseño en Ingeniería Estructural y Geotecnia"
              width={400}
              height={38}
              priority
            />
            <div>
              <ul className="flex flex-col gap-4 text-center sm:flex-row sm:gap-2">
                <li>
                  <Link href="/ingenieria-estructural">
                  <p className="font-light border-1 border-black py-2 px-3 bg-gray-900 hover:bg-gray-700 text-gray-100 text-1lg">INGENIERÍA ESTRUCTURAL</p>
                  </Link>
                </li>
                <li>
                  <Link href="/geoingenierias">
                  <p className="font-light border-1 border-black py-2 px-3 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg">GEOINGENIERÍAS</p>
                  </Link>
                </li>
                <li>
                  <Link href="/ingenieria-ambiental">
                  <p className="font-light border-1 border-black py-2 px-3 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg">INGENIERÍA AMBIENTAL</p>
                  </Link>
                </li>
                <li>
                  <Link href="/capacitacion-especializada">
                  <p className="font-light border-1 border-black py-2 px-3 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg">CAPACITACIÓN ESPECIALIZADA</p>
                  </Link>
                </li>
                <li>
                  <Link href="/equipo-de-trabajo">
                  <p className="font-light border-1 border-black py-2 px-3 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg">EQUIPO DE TRABAJO</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto">
                  <p className="font-light border-1 border-black py-2 px-3 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg">CONTACTO</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </div>
  );
}
