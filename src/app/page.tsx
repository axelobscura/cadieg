import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-950">
          <video src="https://videos.pexels.com/video-files/1197802/1197802-hd_1920_1080_25fps.mp4" className="absolute z-10 w-auto min-w-full min-h-full max-w-none" style={{
            filter: 'grayscale(100%)',
            opacity: '0.3',
          }} autoPlay loop muted></video>
          <div className="relative z-20 flex flex-col items-center justify-center h-full">
            <Image
              className="dark:invert mb-10"
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
            </div>
          </div>
      </div>
    // <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-900 to-blue-950 justify-center">
      
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
    //     <Image
    //       className="dark:invert"
    //       src="/logo.png"
    //       alt="Next.js logo"
    //       width={300}
    //       height={38}
    //       priority
    //     />
    //     <div>
    //       <ul className="flex flex-col gap-4 text-center sm:flex-row sm:gap-8">
    //         <li>
    //           <Link href="/about">
    //           <p className="text-white font-light border-1 border-blue-900 py-3 px-3">INGENIERÍA ESTRUCTURAL</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/geoingenierias">
    //           <p className="text-white font-light border-1 border-blue-900 py-3 px-3">GEOINGENIERÍAS</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/ingenieria-ambiental">
    //           <p className="text-white font-light border-1 border-blue-900 py-3 px-3">INGENIERÍA AMBIENTAL</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/capacitacion-especializada">
    //           <p className="text-white font-light border-1 border-blue-900 py-3 px-3">CAPACITACIÓN ESPECIALIZADA</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/equipo-de-trabajo">
    //           <p className="text-white font-light border-1 border-blue-900 py-3 px-3">EQUIPO DE TRABAJO</p>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/contacto">
    //           <p className="text-white font-light border-1 border-blue-900 py-3 px-3">CONTACTO</p>
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </main>
    // </div>
  );
}
