import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-emerald-100 text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
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
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Advertising Platform Coming Soon
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <Link
              href="/restaurants-join"
              className="transition hover:text-sky-600"
            >
              Restaurants
            </Link>
            
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-81px)] items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_30%)]" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/logo-preview.png"
              alt="WinchesterBites"
              width={560}
              height={220}
              priority
              className="h-auto w-full max-w-2xl object-contain"
            />
          </div>

          <div className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-200">
            Winchester & Frederick County
          </div>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Local Restaurant Advertising Platform
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            WinchesterBites is preparing to launch as a local platform helping
            restaurants promote their menus, specials, and events to customers
            across Winchester and Frederick County.
          </p>

  <div className="mt-10">
   <Link
     href="/restaurants-join"
     className="rounded-full bg-sky-600 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-700"
  >
    Join as a Restaurant Partner
  </Link>
</div>
        
        </div>
      </section>
    </main>
  );
}