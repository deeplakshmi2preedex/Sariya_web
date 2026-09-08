import { Building2, HeartPulse, Plane, ShoppingBag, Store, Utensils } from "lucide-react";

const industries = [
  ["Healthcare", HeartPulse, "bg-red-50 text-red-500"],
  ["Professional", Building2, "bg-purple-50 text-purple-600"],
  ["E-commerce", ShoppingBag, "bg-blue-50 text-blue-600"],
  ["Real Estate", Building2, "bg-orange-50 text-orange-500"],
  ["Restaurant", Utensils, "bg-green-50 text-green-600"],
  ["Travel", Plane, "bg-blue-50 text-blue-500"],
];

export default function Industries() {
  return (
    <section className="pb-24">
      <div className="container-page text-center">
        <h2 className="text-3xl font-semibold">Industries We Serve</h2>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(([name, Icon, style]) => (
            <div key={name} className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#111112] px-4 py-4 text-left">
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${style}`}>
                <Icon size={13} />
              </span>
              <span className="text-[10px] text-white/75">{name}</span>
            </div>
          ))}
        </div>

        <a href="#contact" className="mt-7 inline-block rounded-md bg-white px-4 py-2 text-[9px] font-semibold text-black">
          Get Started ↗
        </a>
      </div>
    </section>
  );
}
