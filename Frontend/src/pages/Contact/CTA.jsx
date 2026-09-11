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
      className="contact-background px-5 pt-43 pb-18 md:px-8"
      style={{
        backgroundImage: `url(${contactImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* NAVBAR */}
      <div className="absolute left-0 right-0 top-10 z-50 px-30">
        <Navbar />
      </div>

      {/* CONTACT CARD */}
      <div className="contact-card mx-auto grid w-full max-w-[975px] gap-5 rounded-[27px] bg-white p-5 text-[#1C1C1C] md:grid-cols-2 ">
        {/* ================= FORM ================= */}
        <div className="px-5 pt-5 md:px-12 md:py-6">
          <h1 className="text-center text-[clamp(22px,4vw,40px)] font-normal text-[#1C1C1C]">
            Get In Touch
          </h1>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
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
                className="mb-2 block text-[clamp(15px,2vw,20px)] text-[#1C1C1C]"
              >
                Phone
              </label>

              <div className="relative">
                <div
                  className={`flex h-[47px] w-full overflow-hidden rounded-2xl border bg-transparent text-[#1C1C1C] transition-colors ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300 focus-within:border-gray-500"
                  }`}
                >
                  {/* COUNTRY SELECT */}
                  <button
                    type="button"
                    onClick={() => setShowCountries(!showCountries)}
                    className="flex shrink-0 items-center gap-2 border-r border-gray-300 px-3 text-[clamp(12px,1.5vw,16px)] text-[#1C1C1C] transition hover:bg-gray-50"
                  >
                    {/* FLAG ICON */}
                    <span
                      className={`fi fi-${selectedCountry.flag}`}
                      style={{
                        width: "20px",
                        height: "15px",
                        display: "inline-block",
                      }}
                    />

                    {/* COUNTRY CODE */}
                    <span className="text-[#1C1C1C]">
                      {selectedCountry.code}
                    </span>

                    {/* ARROW */}
                    <span className="ml-1 text-[10px] text-[#1C1C1C]">▼</span>
                  </button>

                  {/* PHONE INPUT */}
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="h-full min-w-0 flex-1 border-0 bg-transparent px-3 text-[clamp(15px,2vw,20px)] text-[#1C1C1C] outline-none placeholder:text-gray-400 focus:ring-0"
                  />
                </div>

                {/* COUNTRY DROPDOWN */}
                {showCountries && (
                  <div className="absolute left-0 top-[53px] z-50 max-h-[250px] w-[260px] overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                    {countries.map((country) => (
                      <button
                        key={`${country.name}-${country.code}`}
                        type="button"
                        onClick={() => selectCountry(country)}
                        className="flex w-full items-center gap-3 px-3 py-2.5 text-left text-[13px] text-[#1C1C1C] transition hover:bg-gray-100"
                      >
                        {/* COUNTRY FLAG */}
                        <span
                          className={`fi fi-${country.flag}`}
                          style={{
                            width: "22px",
                            height: "16px",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        />

                        {/* COUNTRY NAME */}
                        <span className="flex-1 text-[#1C1C1C]">
                          {country.name}
                        </span>

                        {/* PHONE CODE */}
                        <span className="text-[#1C1C1C]">{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* PHONE ERROR */}
                {errors.phone && <ErrorMessage text={errors.phone} />}
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[clamp(15px,2vw,20px)] text-[#1C1C1C]"
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
                  className={`min-h-[100px] w-full resize-none rounded-2xl border bg-transparent px-3 py-3 text-[clamp(15px,2vw,20px)] text-[#1C1C1C] outline-none placeholder:text-gray-400 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 focus:border-gray-500"
                  }`}
                />

                {errors.message && <ErrorMessage text={errors.message} />}
              </div>
            </div>

            {/* SUBMIT */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex w-[180px] items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-[clamp(14px,2vw,16px)] font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
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

        {/* ================= IMAGE ================= */}
        <div className="relative min-h-[560px] overflow-hidden rounded-[22px] md:min-h-[625px]">
          <img
            src={contactImg}
            alt="Horse and rider standing on a rug in a desert landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-10 px-5 text-[13px] text-white md:justify-between md:px-10">
            <a
              href="tel:+918826418355"
              className="drop-shadow-md transition hover:opacity-80"
            >
              +91-8826418355
            </a>

            <a
              href="mailto:care@sariyadesigns.com"
              className="drop-shadow-md transition hover:opacity-80"
            >
              care@sariyadesigns.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= FIELD ================= */

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
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[clamp(15px,2vw,20px)] text-[#1C1C1C]"
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
          className={`h-[47px] w-full rounded-2xl border bg-transparent px-3 text-[clamp(15px,2vw,20px)] text-[#1C1C1C] outline-none placeholder:text-gray-400 transition-colors ${
            error
              ? "border-red-500 pr-10"
              : "border-gray-300 focus:border-gray-500"
          }`}
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
      <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full border border-red-500 text-[10px] font-bold leading-none">
        !
      </span>

      <span>{text}</span>
    </div>
  );
}
