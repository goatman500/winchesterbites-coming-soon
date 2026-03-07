import Link from "next/link";

export default async function DriversPage({
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
              className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
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
                className="mt-8 inline-block rounded-full bg-green-500 px-8 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="text-sm font-semibold uppercase tracking-[0.35em] text-green-600">
                  Driver Opportunities
                </div>
                <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
                  Drive with WinchesterBites
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Join our early driver network and help bring local food
                  delivery to Winchester and Frederick County.
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
                  value="New WinchesterBites Driver Signup"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.winchesterbites.com/drivers?submitted=true"
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-green-500"
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
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-green-500"
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
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Vehicle Type
                  </label>
                  <select
                    name="vehicle"
                    defaultValue="Car"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-green-500"
                  >
                    <option>Car</option>
                    <option>SUV</option>
                    <option>Truck</option>
                    <option>Scooter / Bike</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about yourself"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-black outline-none transition focus:border-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-600"
                >
                  Apply to Drive
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
}