"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function AuditionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roles: [] as string[],
    experience: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleRole = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/auditions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message);
      setFormData({ name: "", email: "", roles: [], experience: "" });
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 pt-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(30,30,30,0.3) 0%, transparent 70%)",
          }}
        />

        <FadeInSection>
          <h1
            className="text-center"
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: "clamp(1.2rem, 6vw, 3rem)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontWeight: 100,
            }}
          >
            Auditions
          </h1>
        </FadeInSection>

        <FadeInSection delay={150}>
          <p
            className="mt-6 max-w-lg text-center text-lg text-zinc-400"
            style={{ fontWeight: 200 }}
          >
            Register your interest to audition for SYNTHETICA, a neo-noir short
            film by Cardiff Film Production Society.
          </p>
        </FadeInSection>
      </section>

      {/* Form Section */}
      <section className="flex flex-col items-center px-6 py-16">
        <div className="w-full max-w-lg">
          {status === "success" ? (
            <FadeInSection>
              <div className="rounded border border-zinc-800 bg-zinc-950 p-8 text-center">
                <div className="mb-4 text-3xl">&#10003;</div>
                <h2
                  className="text-xl tracking-[0.2em] text-white"
                  style={{ fontWeight: 300 }}
                >
                  REGISTERED
                </h2>
                <p
                  className="mt-4 text-base text-zinc-400"
                  style={{ fontWeight: 200 }}
                >
                  {message}
                </p>
                <p
                  className="mt-2 text-sm text-zinc-500"
                  style={{ fontWeight: 200 }}
                >
                  Check your inbox (and spam folder) for further instructions.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");
                  }}
                  className="mt-8 text-sm tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
                  style={{ fontWeight: 200 }}
                >
                  REGISTER ANOTHER
                </button>
              </div>
            </FadeInSection>
          ) : (
            <FadeInSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs tracking-[0.3em] text-zinc-500"
                    style={{ fontWeight: 200 }}
                  >
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-800 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-500"
                    style={{ fontWeight: 200 }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs tracking-[0.3em] text-zinc-500"
                    style={{ fontWeight: 200 }}
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-zinc-800 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-500"
                    style={{ fontWeight: 200 }}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Role Interest */}
                <div>
                  <label
                    className="mb-4 block text-xs tracking-[0.3em] text-zinc-500"
                    style={{ fontWeight: 200 }}
                  >
                    ROLE INTEREST
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "Ada", label: "ADA", sub: "Lead" },
                      { value: "Dr. Kessler", label: "DR. KESSLER", sub: "Supporting" },
                      { value: "Marcus", label: "MARCUS", sub: "Supporting Lead" },
                    ].map((role) => {
                      const selected = formData.roles.includes(role.value);
                      return (
                        <button
                          key={role.value}
                          type="button"
                          onClick={() => toggleRole(role.value)}
                          className={`flex flex-col items-center gap-1 border px-3 py-4 transition-all ${
                            selected
                              ? "border-white bg-white text-black"
                              : "border-zinc-800 bg-transparent text-white hover:border-zinc-500"
                          }`}
                        >
                          <span
                            className="text-sm tracking-[0.15em]"
                            style={{ fontWeight: 300 }}
                          >
                            {role.label}
                          </span>
                          <span
                            className={`text-xs tracking-wider ${
                              selected ? "text-zinc-600" : "text-zinc-600"
                            }`}
                            style={{ fontWeight: 200 }}
                          >
                            {role.sub}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="mb-2 block text-xs tracking-[0.3em] text-zinc-500"
                    style={{ fontWeight: 200 }}
                  >
                    ACTING EXPERIENCE
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full resize-none border-b border-zinc-800 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-zinc-500"
                    style={{ fontWeight: 200 }}
                    placeholder="Brief summary of your experience (optional)"
                  />
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <p className="text-sm text-red-400" style={{ fontWeight: 200 }}>
                    {message}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative mt-4 w-full border border-zinc-700 bg-transparent px-8 py-4 text-sm tracking-[0.3em] text-white transition-all hover:border-white hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ fontWeight: 300 }}
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      SENDING...
                    </span>
                  ) : (
                    "REGISTER"
                  )}
                </button>
              </form>
            </FadeInSection>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-lg">
          <div className="section-divider mb-16" />
          <FadeInSection>
            <h2
              className="mb-8 text-center text-sm tracking-[0.5em] text-zinc-500"
              style={{ fontWeight: 200 }}
            >
              HOW IT WORKS
            </h2>
          </FadeInSection>

          <div className="space-y-8">
            <FadeInSection delay={100}>
              <Step
                number="01"
                title="Register"
                description="Fill out the form above with your details."
              />
            </FadeInSection>
            <FadeInSection delay={200}>
              <Step
                number="02"
                title="Audition"
                description="You'll read an excerpt from the script. In-person auditions are preferred — details will be shared separately."
              />
            </FadeInSection>
            <FadeInSection delay={300}>
              <Step
                number="03"
                title="Self-tape"
                description="If you can't attend in person, record a self-tape, upload to YouTube (unlisted is fine), and email the link to filmproduction@cardiff.ac.uk."
              />
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
}

// Step component
function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <span
        className="shrink-0 text-2xl tracking-wider text-zinc-700"
        style={{ fontFamily: "'Adversal', sans-serif" }}
      >
        {number}
      </span>
      <div>
        <h3
          className="text-base tracking-[0.2em] text-white"
          style={{ fontWeight: 300 }}
        >
          {title.toUpperCase()}
        </h3>
        <p
          className="mt-1 text-sm leading-relaxed text-zinc-500"
          style={{ fontWeight: 200 }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// Intersection Observer based fade-in component
function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
