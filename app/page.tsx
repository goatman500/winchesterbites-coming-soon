import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-green-600 via-blue-600 to-orange-500 text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75" />

        {/* Top brand */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur">
                <Image
                  src="/logo-preview.png"
                  alt="WinchesterBites logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <div className="text-2xl font-bold tracking-tight">
                  Winchester<span className="text-orange-400">Bites</span>
                </div>
                <div className="text-xs uppercase tracking-[0.35em] text-white/70">
                  Coming Soon
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
              <Link href="/restaurants-join" className="transition hover:text-white">
                Restaurants
              </Link>
              <Link href="/drivers" className="transition hover:text-white">
                Drivers
              </Link>
            </nav>
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
          <div className="max-w-4xl animate-fade-up">
            <div className="mx-auto mb-8 flex justify-center">
              <Image
                src="/logo-preview.png"
                alt="WinchesterBites"
                width={520}
                height={220}
                className="h-auto w-full max-w-2xl drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>

            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-white/80 sm:text-base">
              WinchesterBites.com
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
              Launching Soon
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              A new local food delivery platform for Winchester and Frederick County.
              Now welcoming early restaurant partners and drivers.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/restaurants-join"
                className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                Partner Your Restaurant
              </Link>

              <Link
                href="/drivers"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Join as a Driver
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* SECTION BELOW HERO */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="text-sm uppercase tracking-[0.35em] text-green-400">
              Fast • Fresh • Local
            </div>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Built for the local community
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
              WinchesterBites is focused on connecting local restaurants, drivers,
              and customers through a platform designed for this area.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Restaurants
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Restaurant-Friendly
              </h3>
              <p className="mt-4 leading-7 text-white/70">
                Join early and grow with a platform focused on helping local
                restaurants stand out.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Community
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Local First
              </h3>
              <p className="mt-4 leading-7 text-white/70">
                Built specifically for Winchester and Frederick County with a
                stronger local focus.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Drivers
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Flexible Opportunities
              </h3>
              <p className="mt-4 leading-7 text-white/70">
                We’re looking for early drivers who want flexible delivery
                opportunities close to home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} WinchesterBites</div>
          <div>Winchester & Frederick County</div>
        </div>
      </footer>
    </main>
  );
}