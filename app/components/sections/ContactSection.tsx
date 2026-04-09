"use client";

import { FormEvent, useMemo, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const isFormComplete = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.message.trim();
  }, [form]);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please include a short message.";
    } else if (form.message.trim().length < 12) {
      nextErrors.message = "Message should be at least 12 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitted(true);
    setForm(initialState);
    setErrors({});
  };

  const fieldClass =
    "w-full rounded-2xl border border-slate-700/80 bg-slate-950/70 px-4 py-3.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30";

  return (
    <section
      id="contact"
      className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(5,10,26,0.98),rgba(4,8,21,0.98))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-6"
    >
      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[22px] border border-white/8 bg-white/5 p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 text-[2rem] font-bold leading-[1.02] text-white sm:text-[2.75rem]">
            Let&apos;s build something remarkable
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-[0.95rem]">
            Share your goals and we&apos;ll follow up with a strategy, timeline, and
            next steps.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,37,0.98),rgba(6,11,24,0.98))] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7"
          noValidate
        >
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className={fieldClass}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="mt-2 text-xs text-rose-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className={fieldClass}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="mt-2 text-xs text-rose-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us about your project"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className={fieldClass}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <p className="mt-2 text-xs text-rose-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[linear-gradient(90deg,#c084fc,#4f46e5,#06b6d4)] px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!isFormComplete}
            >
              Submit Message →
            </button>

            {submitted && (
              <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                Thanks! Your message has been sent successfully.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
