function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Frances Nicole P. Tolentino</h1>
        <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
        <hr className="mt-8 border-slate-200" />
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="leading-relaxed text-slate-700">
            I live in Lapu-Lapu City but commute everyday to Cebu for my college classes. I picked IT because I
            want to build and learn programs that people actually open and find useful, I have been slowly figuring out
            what part of that I enjoy most and what slows me down. It has been tricky but i'm willing to go through this path.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <p className="leading-relaxed text-slate-700">
            Course: BS Information Technology
            <br />
            Year level: Third year
            <br />
            Hometown: Lapu-Lapu City, Cebu
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Playing games with friends</li>
            <li>CAAATSSS</li>
            <li>SWEETTTSSS</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>
          <p className="leading-relaxed text-slate-700">
            francesnicole.tolentino@cit.edu
            <br />
            @f.nikxs on most things
          </p>
        </section>

      </main>

      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200" />
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </>
  )
}

export default App