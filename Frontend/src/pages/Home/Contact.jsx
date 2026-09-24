import { useState } from "react";
import { AlertCircle, ChevronDown } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";
import CTA from "../../assets/Home/CTA.png";

const countries = [
  { name: "India", code: "+91", flag: "in" },
  { name: "United States", code: "+1", flag: "us" },
  { name: "United Kingdom", code: "+44", flag: "gb" },
  { name: "Canada", code: "+1", flag: "ca" },
  { name: "Australia", code: "+61", flag: "au" },
  { name: "Germany", code: "+49", flag: "de" },
  { name: "France", code: "+33", flag: "fr" },
  { name: "Singapore", code: "+65", flag: "sg" },
  { name: "United Arab Emirates", code: "+971", flag: "ae" },
  { name: "Japan", code: "+81", flag: "jp" },
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

  /* ================= INPUT CHANGE ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      ...(name === "firstName" || name === "lastName" ? { fullName: "" } : {}),
    }));
  };

  /* ================= VALIDATION ================= */

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

  /* ================= SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Your audit request has been submitted!");
    }
  };

  /* ================= INPUT STYLE ================= */

  const inputClass = (field) => `
    w-full
    min-w-0
    rounded-[clamp(0.4rem,0.7vw,0.6rem)]
    bg-white/10
    px-[clamp(0.65rem,1.2vw,1rem)]
    py-[clamp(0.55rem,1vw,0.7rem)]
    text-[clamp(0.75rem,1.3vw,1rem)]
    leading-[1.4]
    text-white
    outline-none
    border
    border-transparent
    placeholder:text-white/45
    transition-all
    duration-200
    hover:border-white/50
    hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]
    focus:border-white/70
    focus:shadow-[0_0_15px_rgba(255,255,255,0.18)]
    ${errors[field] ? "border-red-400/70" : ""}
  `;

  /* ================= ERROR MESSAGE ================= */

  const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
      <p
        className="
          mt-[clamp(0.35rem,0.7vw,0.5rem)]
          flex
          items-center
          gap-[clamp(0.25rem,0.5vw,0.4rem)]
          text-[clamp(0.65rem,1vw,0.875rem)]
          leading-[1.3]
          text-red-400
        "
      >
        <AlertCircle
          className="
            h-[clamp(0.7rem,1.2vw,0.875rem)]
            w-[clamp(0.7rem,1.2vw,0.875rem)]
            shrink-0
          "
        />

        <span className="break-words">{message}</span>
      </p>
    );
  };

  return (
    <section
      id="contact"
      className="
        mx-[clamp(0.75rem,3vw,2.5rem)]
        mb-[clamp(3rem,7vw,6.25rem)]
        w-auto
        max-w-full
        overflow-hidden
        rounded-[clamp(1.25rem,3vw,2.5rem)]
        
      "
      style={{
        backgroundImage: `url(${CTA})`,
      }}
    >
      {/* OUTER BORDER */}

      <div
        className="
          w-full
          rounded-[inherit]
          border
          border-white/10
          p-[clamp(0.75rem,3vw,3.75rem)]
        "
      >
        {/* INNER CONTAINER */}

        <div
          className="
            grid
            w-full
            min-w-0
            gap-[clamp(1rem,3vw,2.5rem)]
            rounded-[clamp(0.9rem,1.5vw,1.25rem)]
            bg-gradient-to-br
            from-emerald-700
            to-emerald-900
            p-[clamp(1rem,3vw,2.5rem)]
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT CONTENT */}

          <div
            className="
              flex
              min-w-0
              w-full
              flex-col
              justify-center
              px-[clamp(0rem,1vw,0.75rem)]
              py-[clamp(0.5rem,2vw,1.5rem)]
            "
          >
            {/* LOGO */}

            <p
              className="
                pt-[clamp(0rem,1vw,0.75rem)]
                text-[clamp(1.1rem,3vw,2.2rem)]
                font-bold
                leading-none
                text-white
              "
            >
              sariya<span className="text-[#1C39DC]">.</span>
            </p>

            {/* HEADING */}

            <h2
              className="
                mt-[clamp(1.5rem,4vw,3.75rem)]
                max-w-full
                break-words
                text-[clamp(1.25rem,3.5vw,2.5rem)]
                font-semibold
                leading-[1.15]
                text-white
              "
            >
              Ready to build your automated system?
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-[clamp(0.75rem,1.5vw,1rem)]
                max-w-full
                break-words
                text-[clamp(0.75rem,1.3vw,1rem)]
                leading-[1.5]
                text-[#BCC7DB]
              "
            >
              Schedule a 15-minute efficiency audit. We'll look at your current
              workflow and tell you exactly where development can save you
              money.
            </p>
          </div>

          {/* FORM */}

          <div className="min-w-0 w-full">
            <form
              onSubmit={handleSubmit}
              className="
                w-full
                min-w-0
                rounded-[clamp(0.75rem,1.5vw,1rem)]
                bg-gradient-to-br
                from-emerald-800
                to-emerald-950
                p-[clamp(0.9rem,2.5vw,2rem)]
              "
            >
              {/* ================================================= */}
              {/* INPUTS */}
              {/* ================================================= */}

              <div
                className="
                  grid
                  min-w-0
                  grid-cols-1
                  gap-[clamp(1rem,2.5vw,2rem)]
                  sm:grid-cols-2
                "
              >
                {/* FIRST NAME */}

                <div className="min-w-0">
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass("firstName")}
                    placeholder="First name"
                  />

                  <ErrorMessage message={errors.fullName || errors.firstName} />
                </div>

                {/* LAST NAME */}

                <div className="min-w-0">
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass("lastName")}
                    placeholder="Last name"
                  />

                  <ErrorMessage message={errors.lastName} />
                </div>

                {/* EMAIL */}

                <div className="min-w-0">
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

                {/* ================================================= */}
                {/* PHONE */}
                {/* ================================================= */}

                <div className="min-w-0">
                  <div
                    className={`
                      flex
                      min-w-0
                      w-full
                      overflow-hidden
                      rounded-[clamp(0.4rem,0.7vw,0.6rem)]
                      bg-white/10
                      border
                      border-transparent
                      transition-all
                      duration-200
                      hover:border-white/50
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]
                      focus-within:border-white/70
                      focus-within:shadow-[0_0_15px_rgba(255,255,255,0.18)]
                      ${errors.phone ? "border-red-400/70" : ""}
                    `}
                  >
                    {/* COUNTRY SELECTOR */}

                    <div
                      className="
                        relative
                        flex
                        shrink-0
                        items-center
                        border-r
                        border-white/10
                      "
                    >
                      {/* INVISIBLE NATIVE SELECT */}

                      <select
                        value={country.code + country.name}
                        onChange={(e) => {
                          const selected = countries.find(
                            (item) => item.code + item.name === e.target.value,
                          );

                          if (selected) {
                            setCountry(selected);
                          }
                        }}
                        aria-label="Select country"
                        className="
                          absolute
                          inset-0
                          z-10
                          h-full
                          w-full
                          cursor-pointer
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
                            {item.name} {item.code}
                          </option>
                        ))}
                      </select>

                      {/* VISIBLE COUNTRY */}

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-[clamp(0.3rem,0.7vw,0.5rem)]
                          px-[clamp(0.5rem,1vw,0.75rem)]
                          py-[clamp(0.5rem,1vw,0.7rem)]
                          text-white
                        "
                      >
                        {/* ACTUAL FLAG */}

                        <span
                          className={`
                            fi
                            fi-${country.flag}
                            shrink-0
                            text-[clamp(1rem,2vw,1.25rem)]
                          `}
                          aria-hidden="true"
                        />

                        {/* COUNTRY CODE */}

                        <span
                          className="
                            whitespace-nowrap
                            text-[clamp(0.7rem,1.1vw,0.875rem)]
                          "
                        >
                          {country.code}
                        </span>

                        {/* DROPDOWN ICON */}

                        <ChevronDown
                          className="
                            h-[clamp(0.7rem,1.2vw,0.875rem)]
                            w-[clamp(0.7rem,1.2vw,0.875rem)]
                            shrink-0
                            text-white/50
                          "
                        />
                      </div>
                    </div>

                    {/* PHONE NUMBER */}

                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        px-[clamp(0.6rem,1vw,0.75rem)]
                        py-[clamp(0.5rem,1vw,0.7rem)]
                        text-[clamp(0.75rem,1.3vw,1rem)]
                        leading-[1.4]
                        text-white
                        outline-none
                        placeholder:text-white/45
                      "
                      placeholder="Phone number"
                      type="tel"
                    />
                  </div>

                  <ErrorMessage message={errors.phone} />
                </div>
              </div>

              {/* ================================================= */}
              {/* MESSAGE */}
              {/* ================================================= */}

              <div
                className="
                  mt-[clamp(1rem,2.5vw,2rem)]
                  min-w-0
                "
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`
                    min-h-[clamp(6rem,12vw,8rem)]
                    w-full
                    resize-none
                    rounded-[clamp(0.4rem,0.7vw,0.6rem)]
                    bg-white/10
                    px-[clamp(0.65rem,1vw,0.75rem)]
                    py-[clamp(0.55rem,1vw,0.7rem)]
                    text-[clamp(0.75rem,1.3vw,1rem)]
                    leading-[1.4]
                    text-white
                    outline-none
                    border
                    border-transparent
                    placeholder:text-white/45
                    transition-all
                    duration-200
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

              {/* ================================================= */}
              {/* SUBMIT BUTTON */}
              {/* ================================================= */}

              <button
                type="submit"
                className="
                  mt-[clamp(1rem,2vw,1.25rem)]
                  flex
                  min-h-[clamp(2.75rem,5vw,3rem)]
                  w-full
                  items-center
                  justify-center
                  gap-[clamp(0.35rem,0.7vw,0.5rem)]
                  rounded-[clamp(0.65rem,1vw,0.75rem)]
                  bg-white
                  px-[clamp(0.75rem,1.5vw,1rem)]
                  py-[clamp(0.5rem,1vw,0.65rem)]
                  text-[clamp(0.75rem,1.3vw,1rem)]
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  ease-in-out
                  hover:bg-gray-300
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
