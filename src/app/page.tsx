import Image from 'next/image';
import Link from 'next/link';

import airplaneSvg from '../assets/airplane.svg';
import logoSvg from '../assets/logo.svg';

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="mx-auto flex h-screen w-full max-w-screen-xl flex-col p-8"
      >
        <nav className="flex w-full items-center justify-between">
          <Link href="/">
            <Image
              className="h-14 w-14"
              src={logoSvg}
              alt="Logomarca da AirPlanner"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="#hero"
              className="font-medium text-stone-700 transition-colors hover:text-fuchsia-500"
            >
              Preço
            </Link>
            <Link
              href="#hero"
              className="font-medium text-stone-700 transition-colors hover:text-fuchsia-500"
            >
              Sobre
            </Link>
            <Link
              href="#hero"
              className="font-medium text-stone-700 transition-colors hover:text-fuchsia-500"
            >
              Blog
            </Link>
            <Link
              href="#hero"
              className="rounded-full bg-fuchsia-500 px-5 py-3 font-medium text-white transition-colors hover:bg-fuchsia-700"
            >
              Começar
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex w-full items-center justify-between">
          <div>
            <h1 className="text-left text-7xl font-black text-stone-800">
              Planeje sua viagem com o{' '}
              <span className="text-fuchsia-500">AirPlanner</span>.
            </h1>
            <p className="mt-8 text-lg font-bold text-stone-700">
              Nunca foi tão fácil planejar uma viagem.
              <br /> Faça tudo de forma eficaz e sem dor de cabeça!
            </p>
          </div>
          <Image
            className="w-full max-w-2xl"
            src={airplaneSvg}
            alt="Ilustração de um avião dando a volta no planeta Terra."
          />
        </div>
        <Link
          href="#hero"
          className="mx-auto w-fit rounded-full bg-fuchsia-500 px-5 py-3 font-medium text-white transition-colors hover:bg-fuchsia-700"
        >
          Comece agora!
        </Link>
      </section>
    </main>
  );
}
