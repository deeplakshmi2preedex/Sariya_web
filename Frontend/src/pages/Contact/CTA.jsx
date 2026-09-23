import { useState } from "react";
import Navbar from "../../components/Navbar";
import contactImg from "../../assets/contact/contactImg.png";
import "flag-icons/css/flag-icons.min.css";

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

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountries, setShowCountries] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSubmitted(false);
  }

  function validateForm() {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "This field is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "This field is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "This field is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "This field is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "This field is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  }

  function selectCountry(country) {
    setSelectedCountry(country);
    setShowCountries(false);
  }

  return (
    <section
      id="contact"
      className="
        contact-background
        relative
        min-h-screen
        w-full
        overflow-hidden
        px-[clamp(0.75rem,4vw,2rem)]
        pt-[clamp(8rem,14vw,10.75rem)]
        pb-[clamp(2rem,5vw,4.5rem)]
      "
      style={{
        backgroundImage: `url(${contactImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= NAVBAR ================= */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[clamp(1rem,3vw,2.5rem)]
          z-50
          w-full
          px-[clamp(0.75rem,4vw,7.5rem)]
        "
      >
        <Navbar />
      </div>

      {/* ================= CONTACT CARD ================= */}
      <div
        className="
          contact-card
          mx-auto
          grid
          w-full
          max-w-[975px]
          min-w-0
          grid-cols-1
          gap-[clamp(1rem,2vw,1.25rem)]
          rounded-[clamp(1.25rem,3vw,1.6875rem)]
          bg-white
          p-[clamp(0.75rem,2vw,1.25rem)]
          text-[#1C1C1C]
          md:grid-cols-2
        "
      >
        {/* ================= IMAGE ================= */}
        <div
          className="
            relative
            order-1
            min-h-[clamp(22rem,65vw,39.0625rem)]
            w-full
            min-w-0
            overflow-hidden
            rounded-[clamp(1rem,2.5vw,1.375rem)]
            md:order-2
          "
        >
          <img
            src={contactImg}
            alt="Horse and rider standing on a rug in a desert landscape"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          <div className="absolute inset-0 bg-black/10" />

          <div
            className="
              absolute
              bottom-[clamp(1.5rem,4vw,2.5rem)]
              left-0
              right-0
              flex
              flex-col
              items-center
              justify-center
              gap-[clamp(0.5rem,2vw,2.5rem)]
              px-[clamp(1rem,3vw,2.5rem)]
              text-center
              text-[clamp(0.6875rem,1.3vw,0.8125rem)]
              text-white
              sm:flex-row
              sm:justify-between
            "
          >
            <a
              href="tel:+918826418355"
              className="
                max-w-full
                break-all
                drop-shadow-md
                transition
                hover:opacity-80
              "
            >
              +91-8826418355
            </a>

            <a
              href="mailto:care@sariyadesigns.com"
              className="
                max-w-full
                break-all
                drop-shadow-md
                transition
                hover:opacity-80
              "
            >
              care@sariyadesigns.com
            </a>
          </div>
        </div>

        {/* ================= FORM ================= */}
        <div
          className="
            order-2
            min-w-0
            px-[clamp(0.5rem,2vw,3rem)]
            pt-[clamp(0.75rem,2vw,1.5rem)]
            pb-[clamp(1rem,2vw,1.5rem)]
            md:order-1
          "
        >
          <h1
            className="
              w-full
              text-center
              font-normal
              leading-[1.1]
              text-[#1C1C1C]
              text-[clamp(1.5rem,4vw,2.5rem)]
            "
          >
            Get In Touch
          </h1>

          <form
            onSubmit={handleSubmit}
            className="
              mt-[clamp(1.5rem,3vw,1.75rem)]
              space-y-[clamp(1rem,2vw,1.25rem)]
            "
          >
            {/* FIRST NAME */}
            <Field
              label="First name"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />

            {/* LAST NAME */}
            <Field
              label="Last name"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />

            {/* EMAIL */}
            <Field
              label="Email *"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* ================= PHONE ================= */}
            <div>
              <label
                htmlFor="phone"
                className="
                  mb-2
                  block
                  text-[#1C1C1C]
                  text-[clamp(0.9375rem,2vw,1.25rem)]
                "
              >
                Phone
              </label>

              <div className="relative">
                <div
                  className={`
                    flex
                    h-[clamp(2.75rem,5vw,2.9375rem)]
                    w-full
                    min-w-0
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-transparent
                    text-[#1C1C1C]
                    transition-colors
                    ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 focus-within:border-gray-500"
                    }
                  `}
                >
                  {/* COUNTRY SELECT */}
                  <button
                    type="button"
                    onClick={() => setShowCountries(!showCountries)}
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-[clamp(0.3rem,1vw,0.5rem)]
                      border-r
                      border-gray-300
                      px-[clamp(0.5rem,1.5vw,0.75rem)]
                      text-[#1C1C1C]
                      transition
                      hover:bg-gray-50
                    "
                  >
                    <span
                      className={`
                        fi
                        fi-${selectedCountry.flag}
                        shrink-0
                      `}
                      style={{
                        width: "20px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    />

                    <span
                      className="
                        whitespace-nowrap
                        text-[clamp(0.75rem,1.5vw,1rem)]
                      "
                    >
                      {selectedCountry.code}
                    </span>

                    <span className="ml-0.5 text-[9px] text-[#1C1C1C]">
                      ▼
                    </span>
                  </button>

                  {/* PHONE INPUT */}
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="
                      h-full
                      min-w-0
                      flex-1
                      border-0
                      bg-transparent
                      px-[clamp(0.5rem,1.5vw,0.75rem)]
                      text-[#1C1C1C]
                      outline-none
                      placeholder:text-gray-400
                      focus:ring-0
                      text-[clamp(0.9375rem,2vw,1.25rem)]
                    "
                  />
                </div>

                {/* COUNTRY DROPDOWN */}
                {showCountries && (
                  <div
                    className="
                      absolute
                      left-0
                      top-[calc(100%+0.375rem)]
                      z-50
                      max-h-[clamp(12rem,40vw,15.625rem)]
                      w-[min(260px,85vw)]
                      overflow-y-auto
                      rounded-lg
                      border
                      border-gray-200
                      bg-white
                      py-1
                      shadow-lg
                    "
                  >
                    {countries.map((country) => (
                      <button
                        key={`${country.name}-${country.code}`}
                        type="button"
                        onClick={() => selectCountry(country)}
                        className="
                          flex
                          w-full
                          min-w-0
                          items-center
                          gap-3
                          px-3
                          py-2.5
                          text-left
                          text-[13px]
                          text-[#1C1C1C]
                          transition
                          hover:bg-gray-100
                        "
                      >
                        <span
                          className={`
                            fi
                            fi-${country.flag}
                            shrink-0
                          `}
                          style={{
                            width: "22px",
                            height: "16px",
                            display: "inline-block",
                          }}
                        />

                        <span
                          className="
                            min-w-0
                            flex-1
                            break-words
                            text-[#1C1C1C]
                          "
                        >
                          {country.name}
                        </span>

                        <span className="shrink-0 text-[#1C1C1C]">
                          {country.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {errors.phone && (
                  <ErrorMessage text={errors.phone} />
                )}
              </div>
            </div>

            {/* ================= MESSAGE ================= */}
            <div>
              <label
                htmlFor="message"
                className="
                  mb-2
                  block
                  text-[#1C1C1C]
                  text-[clamp(0.9375rem,2vw,1.25rem)]
                "
              >
                Message *
              </label>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className={`
                    min-h-[clamp(6rem,15vw,7rem)]
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    bg-transparent
                    px-3
                    py-3
                    text-[#1C1C1C]
                    outline-none
                    placeholder:text-gray-400
                    text-[clamp(0.9375rem,2vw,1.25rem)]
                    ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 focus:border-gray-500"
                    }
                  `}
                />

                {errors.message && (
                  <ErrorMessage text={errors.message} />
                )}
              </div>
            </div>

            {/* ================= SUBMIT BUTTON ================= */}
            <div className="w-full">
              <button
                type="submit"
                className="
                  flex
                  h-[clamp(2.75rem,5vw,2.9375rem)]
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-600
                  px-4
                  font-semibold
                  text-white
                  text-[clamp(0.875rem,2vw,1rem)]
                  transition-all
                  duration-300
                  hover:bg-blue-700
                  hover:shadow-lg
                  active:scale-[0.99]
                "
              >
                Submit
              </button>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <p className="text-center text-xs text-green-600">
                Thanks! Your message has been submitted.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE FIELD ================= */

function Field({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-[#1C1C1C]
          text-[clamp(0.9375rem,2vw,1.25rem)]
        "
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            h-[clamp(2.75rem,5vw,2.9375rem)]
            w-full
            min-w-0
            rounded-2xl
            border
            bg-transparent
            px-3
            text-[#1C1C1C]
            outline-none
            placeholder:text-gray-400
            transition-colors
            text-[clamp(0.9375rem,2vw,1.25rem)]
            ${
              error
                ? "border-red-500 pr-10"
                : "border-gray-300 focus:border-gray-500"
            }
          `}
        />

        {error && <ErrorMessage text={error} />}
      </div>
    </div>
  );
}

/* ================= ERROR MESSAGE ================= */

function ErrorMessage({ text }) {
  return (
    <div className="mt-1 flex items-center gap-1.5 text-[11px] text-red-500">
      <span
        className="
          flex
          h-[15px]
          w-[15px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-red-500
          text-[10px]
          font-bold
          leading-none
        "
      >
        !
      </span>

      <span>{text}</span>
    </div>
  );
}