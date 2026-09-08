import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function CompanyStats() {
  return (
    <section className="pb-24">
      <div className="container-page overflow-hidden rounded-[22px] border border-white/10 bg-[#070707]">
        <div className="grid md:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 sm:p-12">
            <Quote size={30} className="text-blue-300/70" />
            <blockquote className="mt-7 max-w-lg text-lg font-semibold leading-7">
              "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
            </blockquote>
            <div className="mt-7 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-300/70" />
              <div>
                <p className="text-[10px] font-semibold">Jordan Reeves</p>
                <p className="text-[9px] text-white/50">CEO, Acme Logistics</p>
              </div>
            </div>
            <div className="mt-9 flex gap-2">
              <button className="rounded-full bg-white p-2 text-black"><ChevronLeft size={12} /></button>
              <button className="rounded-full bg-white p-2 text-black"><ChevronRight size={12} /></button>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <p className="text-[10px] leading-5 text-white/50">
              We've proudly served 60+ countries and supported clients across 20+ platforms.
              With a 100% completion ratio, we're successfully delivering for over 20+ clients.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                ["60+", "Countries"],
                ["20+", "Platforms"],
                ["100%", "Completion Ratio"],
                ["200+", "Projects"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md bg-white p-4 text-black">
                  <div className="text-lg font-semibold">{value}</div>
                  <div className="mt-1 text-[8px] text-black/50">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
