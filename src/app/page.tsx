import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-100 bg-[url('/bkg5.jpeg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
          {/* <video src="https://videos.pexels.com/video-files/1197802/1197802-hd_1920_1080_25fps.mp4" className="absolute z-10 w-auto min-w-full min-h-full max-w-none" style={{
            filter: 'white(100%)',
            opacity: '0.3',
          }} autoPlay loop muted></video> */}
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
                  <Link href="/quienes-somos">
                  <p className="font-light border-1 border-black py-2 px-5 bg-gray-900 hover:bg-gray-700 text-gray-100 text-1lg rounded-4xl">QUIENES SOMOS</p>
                  </Link>
                </li>
                <li>
                  <Link href="/ingenieria-estructural">
                  <p className="font-light border-1 border-black py-2 px-5 bg-gray-900 hover:bg-gray-700 text-gray-100 text-1lg rounded-4xl">INGENIERÍA ESTRUCTURAL</p>
                  </Link>
                </li>
                <li>
                  <Link href="/geoingenierias">
                  <p className="font-light border-1 border-black py-2 px-5 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg rounded-4xl">GEOINGENIERÍAS</p>
                  </Link>
                </li>
                <li>
                  <Link href="/ingenieria-ambiental">
                  <p className="font-light border-1 border-black py-2 px-5 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg rounded-4xl">INGENIERÍA AMBIENTAL</p>
                  </Link>
                </li>
                <li>
                  <Link href="/capacitacion-especializada">
                  <p className="font-light border-1 border-black py-2 px-5 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg rounded-4xl">CAPACITACIÓN ESPECIALIZADA</p>
                  </Link>
                </li>
                <li>
                  <Link href="/equipo-de-trabajo">
                  <p className="font-light border-1 border-black py-2 px-5 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg rounded-4xl">EQUIPO DE TRABAJO</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto">
                  <p className="font-light border-1 border-black py-2 px-5 bg-gray-900 hover:bg-gray-700 text-gray-100 bg-opacity-5 text-1lg rounded-4xl">CONTACTO</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </div>
  );
}
