import Link from "next/link";

export default function RestaurantsJoinPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-20">
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="mb-8">
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Restaurant Partners
            </div>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Partner with WinchesterBites
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
              We’re welcoming early restaurant partners as WinchesterBites
              prepares to launch in Winchester and Frederick County.
            </p>
          </div>

          <form className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Restaurant Name
              </label>
              <input
                type="text"
                placeholder="Your restaurant name"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Contact Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-400"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your restaurant"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600"
            >
              Submit Interest
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}