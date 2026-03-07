import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-slate-900">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.10),transparent_30%)]" />

        <header className="relative z-20 border-b border-slate-200/80 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <Image
                  src="/logo-preview.png"
                  alt="WinchesterBites logo"
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div>
                <div className="text-2xl font-black tracking-tight text-slate-900">
                  WinchesterBites
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Coming Soon
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
              <Link href="/restaurants-join" className="transition hover:text-blue-600">
                Restaurants
              </Link>
              <Link href="/drivers" className="transition hover:text-green-600">
                Drivers
              </Link>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-up">
              <div className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-200">
                Winchester & Frederick County
              </div>

              <h1 className="max-w-2xl text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                A fresh new delivery platform is coming soon.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                WinchesterBites is building a cleaner, more modern local delivery
                experience for restaurants, drivers, and the community.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/restaurants-join"
                  className="rounded-2xl bg-blue-600 px-7 py-4 text-center font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  Partner Your Restaurant
                </Link>

                <Link
                  href="/drivers"
                  className="rounded-2xl bg-green-500 px-7 py-4 text-center font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-1 hover:bg-green-600"
                >
                  Join as a Driver
                </Link>
              </div>

              <p className="mt-5 text-sm font-medium text-slate-500">
                Now welcoming early restaurant partners and drivers.
              </p>
            </div>

            <div className="animate-fade-up">
              <div className="relative mx-auto max-w-xl">
                <div className="absolute inset-0 rounded-[2rem] bg-blue-200/30 blur-3xl" />
                <div className="relative rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200">
                  <div className="flex justify-center rounded-[1.5rem] bg-gradient-to-br from-blue-50 via-white to-green-50 p-8">
                    <Image
                      src="/logo-preview.png"
                      alt="WinchesterBites"
                      width={520}
                      height={220}
                      priority
                      className="h-auto w-full max-w-md object-contain"
                    />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100">
                      <div className="text-sm font-semibold text-blue-700">Restaurants</div>
                      <div className="mt-1 text-sm text-slate-600">
                        Early partner opportunities
                      </div>
                    </div>

                    <div className="rounded-2xl bg-green-50 p-4 ring-1 ring-green-100">
                      <div className="text-sm font-semibold text-green-700">Drivers</div>
                      <div className="mt-1 text-sm text-slate-600">
                        Flexible local delivery
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-100 p-4 ring-1 ring-slate-200">
                      <div className="text-sm font-semibold text-slate-700">Launch</div>
                      <div className="mt-1 text-sm text-slate-600">
                        Coming soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="animate-fade-up rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
              🍽️
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Restaurant-Friendly
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              A platform built to support local restaurants and help them grow.
            </p>
          </div>

          <div className="animate-fade-up rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">
              📍
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Local First
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Focused on Winchester and Frederick County with a community-first feel.
            </p>
          </div>

          <div className="animate-fade-up rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
              🚗
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Driver Opportunities
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Flexible delivery opportunities for drivers who want to work close to home.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} WinchesterBites</div>
          <div>Fresh • Local • Coming Soon</div>
        </div>
      </footer>
    </main>
  );
}