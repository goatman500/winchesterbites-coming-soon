import Link from "next/link";

export default async function RestaurantsJoinPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const params = await searchParams;
  const submitted = params?.submitted === "true";

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-20">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-blue/400 transition hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>

          {submitted ? (
            <div className="py-10 text-center">
              
              <h1 className="text-4xl font-semibold text-slate-900">
                Thank You!
             </h1>
               
              <p className="mt-4 text-lg text-slate-600">
              Your submission has been received. Someone from WinchesterBites
              will be reaching out to you soon.
              </p>
             
              <Link
                href="/"
                className="mt-8 inline-block rounded-full bg-blue-500 px-8 py-3 font-semibold text-white transition hover:bg-blue-600"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <>
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

              <form
                action="https://formsubmit.co/conner.brach@outlook.com"
                method="POST"
                className="grid gap-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New WinchesterBites Restaurant Signup"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.winchesterbites.com/restaurants-join?submitted=true"
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    required
                    placeholder="Your restaurant name"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-blue-500"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your restaurant"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-600"
                >
                  Submit Interest
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}