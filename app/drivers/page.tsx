import Link from "next/link";

export default function DriversPage() {
  return (
    <main className="min-h-screen bg-[#061120] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-4 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
            Driver Interest
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Drive with WinchesterBites
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            We are building a local-first delivery platform for Winchester and
            Frederick County and looking for early driver partners.
          </p>

          <form className="mt-10 grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-[#0b1a2b] px-4 py-3 text-white outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-[#0b1a2b] px-4 py-3 text-white outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full rounded-2xl border border-white/10 bg-[#0b1a2b] px-4 py-3 text-white outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Vehicle Type
              </label>
              <input
                type="text"
                placeholder="Car, SUV, etc."
                className="w-full rounded-2xl border border-white/10 bg-[#0b1a2b] px-4 py-3 text-white outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Availability
              </label>
              <textarea
                placeholder="Weekdays, evenings, weekends..."
                rows={4}
                className="w-full rounded-2xl border border-white/10 bg-[#0b1a2b] px-4 py-3 text-white outline-none transition focus:border-sky-400"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:scale-[1.01]"
            >
              Submit Driver Interest
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}