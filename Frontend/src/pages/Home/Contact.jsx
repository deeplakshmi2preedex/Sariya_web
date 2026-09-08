import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-y border-white/5 py-16">
      <div className="container-page">
        <div className="grid gap-10 rounded-[20px] border border-white/10 bg-black p-7 sm:p-10 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-lg font-bold">sariya<span className="text-blue-500">.</span></p>
            <h2 className="mt-10 max-w-md text-3xl font-semibold leading-tight">
              Ready to build your automated system?
            </h2>
            <p className="mt-3 max-w-lg text-xs leading-5 text-white/45">
              Schedule a 15-minute audit with us. We'll look at your current workflow
              and tell you exactly where development can save you time.
            </p>
          </div>

          <form
            className="rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-2">
              <input className="rounded-md bg-white/10 px-3 py-2 text-[10px] outline-none placeholder:text-white/45" placeholder="First name" />
              <input className="rounded-md bg-white/10 px-3 py-2 text-[10px] outline-none placeholder:text-white/45" placeholder="Last name" />
              <input className="rounded-md bg-white/10 px-3 py-2 text-[10px] outline-none placeholder:text-white/45" placeholder="Email" type="email" />
              <input className="rounded-md bg-white/10 px-3 py-2 text-[10px] outline-none placeholder:text-white/45" placeholder="Phone" />
            </div>
            <textarea
              className="mt-2 min-h-20 w-full resize-none rounded-md bg-white/10 px-3 py-2 text-[10px] outline-none placeholder:text-white/45"
              placeholder="What do you want to automate?"
            />
            <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-white py-2 text-[9px] font-semibold text-black">
              Send My Audit Request <ArrowUpRight size={12} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
