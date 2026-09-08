import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="contact-background min-h-[795px] px-5 pb-14 pt-[145px] md:min-h-[790px] md:px-8"
    >
      <div className="contact-card mx-auto grid w-full max-w-[1150px] gap-5 rounded-[27px] bg-white p-4 text-black md:grid-cols-2 md:p-5">
        <div className="px-5 py-4 md:px-12 md:py-6">
          <h1 className="text-center text-[29px] font-normal md:text-[32px]">
            Get In Touch
          </h1>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <Field
              label="First name"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
            />

            <Field
              label="Last name"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
            />

            <Field
              label="Email *"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
            />

            <div>
              <label htmlFor="phone" className="mb-2 block text-[14px]">
                Phone
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-neutral-600">
                  ◎
                </span>
                <span className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-xs text-neutral-700">
                  ⌄
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-input w-full pl-12"
                  placeholder=""
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-[14px]">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                className="form-input w-full"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              className="h-[47px] w-full rounded-[11px] bg-blue-600 text-[13px] font-semibold text-white transition hover:bg-blue-700"
            >
              Submit
            </button>

            {submitted && (
              <p className="text-center text-xs text-green-600">
                Thanks! Your message has been submitted.
              </p>
            )}
          </form>
        </div>

        <div className="relative min-h-[560px] overflow-hidden rounded-[22px] md:min-h-[625px]">
          <img
            src="/contact-photo.jpg"
            alt="Horse and rider standing on a rug in a desert landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-10 px-5 text-[13px] text-white md:justify-between md:px-10">
            <a href="tel:+918826418355" className="drop-shadow-md">
              +91-8826418355
            </a>
            <a href="mailto:care@sariyadesigns.com" className="drop-shadow-md">
              care@sariyadesigns.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[14px]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input w-full"
      />
    </div>
  );
}
