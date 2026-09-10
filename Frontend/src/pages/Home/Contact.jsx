import { useState } from "react";
import { AlertCircle, ChevronDown } from "lucide-react";

const countries = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [country, setCountry] = useState(countries[0]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim() && !formData.lastName.trim()) {
      newErrors.fullName = "Enter full name";
    } else if (!formData.firstName.trim()) {
      newErrors.firstName = "Enter first name";
    } else if (!formData.lastName.trim()) {
      newErrors.lastName = "Enter last name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Enter email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Enter phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Enter what you want to automate";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Your audit request has been submitted!");
    }
  };

  const inputClass = (field) => `
    w-full rounded-md bg-white/10 px-4 py-2
    text-[clamp(9px,2vw,16px)] text-white
    outline-none border border-transparent
    placeholder:text-white/45
    transition-all duration-200
    hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]
    focus:border-white/70 focus:shadow-[0_0_15px_rgba(255,255,255,0.18)]
    ${errors[field] ? "border-red-400/70" : ""}
  `;

  const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
      <p className="mt-2 flex items-center gap-1.5 text-sm text-red-400">
        <AlertCircle size={14} />
        {message}
      </p>
    );
  };

  return (
    <section
      id="contact"
      className="m-10 rounded-4xl bg-gradient-to-br from-emerald-900 to-[#022C22]"
    >
      {/* Outline Div */}
      <div className="rounded-4xl border border-white/10 p-15">
        {/* Inner Div */}
        <div className="grid gap-10 rounded-[20px] bg-gradient-to-br from-emerald-700 to-emerald-900 p-10 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="text-[clamp(15px,4vw,35px)] font-bold pt-10">
              sariya<span className="text-[#1C39DC]">.</span>
            </p>

            <h2 className="pt-15  text-[clamp(15px,4vw,40px)] font-semibold leading-tight text-white leading[1.7]">
              Ready to build your automated system?
            </h2>

            <p className="mt-3 text-[clamp(9px,2vw,16px)] leading-[1.5] text-[#BCC7DB]">
              Schedule a 15-minute efficiency audit. We'll look at your current
              workflow and tell you exactly where development can save you
              money.
            </p>
          </div>

          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-8"
            >
              {/* Inputs */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass("firstName")}
                    placeholder="First name"
                  />

                  <ErrorMessage message={errors.fullName || errors.firstName} />
                </div>

                {/* Last Name */}
                <div>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass("lastName")}
                    placeholder="Last name"
                  />

                  <ErrorMessage message={errors.lastName} />
                </div>

                {/* Email */}
                <div>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass("email")}
                    placeholder="Email"
                    type="email"
                  />

                  <ErrorMessage message={errors.email} />
                </div>

                {/* Phone */}
                <div>
                  <div
                    className={`
                      flex overflow-hidden rounded-md bg-white/10
                      border border-transparent
                      transition-all duration-200
                      hover:border-white/50
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]
                      focus-within:border-white/70
                      focus-within:shadow-[0_0_15px_rgba(255,255,255,0.18)]
                      ${errors.phone ? "border-red-400/70" : ""}
                    `}
                  >
                    {/* Country */}
                    <div className="relative flex shrink-0 items-center border-r border-white/10">
                      <select
                        value={country.code + country.name}
                        onChange={(e) => {
                          const selected = countries.find(
                            (item) => item.code + item.name === e.target.value,
                          );

                          setCountry(selected);
                        }}
                        className="
                          absolute inset-0 w-full cursor-pointer
                          opacity-0
                          [color-scheme:dark]
                        "
                      >
                        {countries.map((item) => (
                          <option
                            key={item.name}
                            value={item.code + item.name}
                            className="bg-black text-white"
                          >
                            {item.flag} {item.name} {item.code}
                          </option>
                        ))}
                      </select>

                      {/* Decreased country section height */}
                      <div className="flex items-center gap-1.5 px-3 py-1 text-white">
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm">{country.code}</span>
                        <ChevronDown size={14} className="text-white/50" />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="
                        min-w-0 flex-1 bg-transparent
                        px-3 py-2
                        text-[clamp(9px,2vw,16px)]
                        text-white outline-none
                        placeholder:text-white/45
                      "
                      placeholder="Phone number"
                      type="tel"
                    />
                  </div>

                  <ErrorMessage message={errors.phone} />
                </div>
              </div>

              {/* Message */}
              <div className="mt-8">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`
                    min-h-24 w-full resize-none rounded-md
                    bg-white/10 px-2 py-2
                    text-[clamp(9px,2vw,16px)] text-white
                    outline-none border border-transparent
                    placeholder:text-white/45
                    transition-all duration-200
                    hover:border-white/50
                    hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]
                    focus:border-white/70
                    focus:shadow-[0_0_15px_rgba(255,255,255,0.18)]
                    ${errors.message ? "border-red-400/70" : ""}
                  `}
                  placeholder="What do you want to automate?"
                />

                <ErrorMessage message={errors.message} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  mt-5 flex w-full items-center justify-center
                  gap-2 rounded-xl bg-white p-2.5
                  text-[clamp(9px,2vw,16px)] font-bold text-black
                  transition-all duration-300 ease-in-out
                  hover:bg-gray-300
                  hover:text-[clamp(8px,1.8vw,14px)]
                  hover:font-normal
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
                "
              >
                Send My Audit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
