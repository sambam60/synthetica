"use client";

import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start showing content after title animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - Full viewport */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        {/* Background gradient effect */}
        <div 
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(30,30,30,0.3) 0%, transparent 70%)"
          }}
        />
        
        {/* Title */}
        <h1 
          className="animate-title-reveal text-center opacity-0"
          style={{ 
            fontFamily: "'Adversal', sans-serif",
            fontSize: "clamp(1.2rem, 8vw, 4rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Synthetica
        </h1>

        {/* Tagline */}
        <a
          href="https://www.youtube.com/watch?v=srHYi2L1zN4"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in delay-2000 mt-6 text-center text-sm tracking-[0.2em] text-zinc-400 opacity-0 md:text-base inline-block hover:text-zinc-100 transition-colors"
          style={{ fontWeight: 100 }}
        >
          WATCH THE TEASER
        </a>

        {/* Scroll indicator */}
        {showContent && (
          <div className="animate-fade-in absolute bottom-8 flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest text-zinc-500" style={{ fontWeight: 100 }}>
              SCROLL
            </span>
            <div className="animate-pulse-slow h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
          </div>
        )}
      </section>

      {/* Synopsis Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <FadeInSection>
            <h2 className="mb-8 text-center text-xs tracking-[0.5em] text-zinc-500" style={{ fontWeight: 100 }}>
              SYNOPSIS
            </h2>
          </FadeInSection>
          <FadeInSection delay={100}>
            <p className="text-center text-lg leading-relaxed text-zinc-200 md:text-xl" style={{ fontWeight: 200 }}>
              Ada, a retired hacker living quietly as an art curator, discovers an illegal neural implant in their head after experiencing dangerous memory glitches.
            </p>
          </FadeInSection>
          <FadeInSection delay={200}>
            <p className="mt-6 text-center text-lg leading-relaxed text-zinc-200 md:text-xl" style={{ fontWeight: 200 }}>
              When an underground surgeon can&apos;t safely remove it, Ada is forced to accept one last job: infiltrate the corporation that created the device.
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <p className="mt-6 text-center text-lg leading-relaxed text-zinc-300 md:text-xl" style={{ fontWeight: 200 }}>
              As the mission unfolds, Ada must confront the truth about their forgotten past and the real purpose of the technology buried in their mind.
            </p>
          </FadeInSection>
        </div>
        
        <div className="section-divider mx-auto mt-24 max-w-md" />
      </section>

      {/* Themes Section */}
      <section className="flex min-h-[10vh] flex-col items-center justify-center px-6 py-24">
        <FadeInSection>
          <p 
            className="text-center text-2xl tracking-wide text-zinc-400 md:text-3xl" 
            style={{ fontWeight: 100 }}
          >
            A story about...
          </p>
        </FadeInSection>
        <FadeInSection delay={150}>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center">
            {["MEMORY,", "GRIEF", "AND", "IDENTITY"].map((word, i) => (
              <span
                key={i}
                className="block text-center text-2xl tracking-[0.2em] text-white md:text-4xl"
                style={{
                  fontWeight: 200,
                  marginRight: i !== 3 ? "0.6em" : 0,
                  wordBreak: "break-word",
                  minWidth: "min-content",
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Genre & Details */}
      <section className="flex flex-col items-center px-6 py-24">
        <div className="mx-auto grid w-full max-w-4xl gap-12 md:grid-cols-3">
          <FadeInSection>
            <div className="text-center">
              <h3 className="text-xs tracking-[0.4em] text-zinc-500" style={{ fontWeight: 100 }}>
                GENRE
              </h3>
              <p className="mt-3 text-xl text-white" style={{ fontWeight: 200 }}>
                Neo-Noir
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <div className="text-center">
              <h3 className="text-xs tracking-[0.4em] text-zinc-500" style={{ fontWeight: 100 }}>
                RUNTIME
              </h3>
              <p className="mt-3 text-xl text-white" style={{ fontWeight: 200 }}>
                ~25 Minutes
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <div className="text-center">
              <h3 className="text-xs tracking-[0.4em] text-zinc-500" style={{ fontWeight: 100 }}>
                FORMAT
              </h3>
              <p className="mt-3 text-xl text-white" style={{ fontWeight: 200 }}>
                Short Film
              </p>
            </div>
          </FadeInSection>
        </div>
        
        <div className="section-divider mx-auto mt-24 max-w-md" />
      </section>

      {/* Characters Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <FadeInSection>
            <h2 className="mb-16 text-center text-xs tracking-[0.5em] text-zinc-500" style={{ fontWeight: 100 }}>
              CHARACTERS
            </h2>
          </FadeInSection>
          
          <div className="grid gap-12 md:grid-cols-3">
            <FadeInSection>
              <CharacterCard
                name="ADA"
                role="Lead"
                description="Former hacker/operative turned art curator. Withdrawn, haunted by lost memories, skilled but cautious."
              />
            </FadeInSection>
            
            <FadeInSection delay={100}>
              <CharacterCard
                name="DR. MAREK"
                role="Supporting"
                description="Underground cyberware surgeon. Ada's trusted contact with technical expertise. Conveys trustworthiness and concern."
              />
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <CharacterCard
                name="MARCUS"
                role="Supporting Lead"
                description="Nervous rebel turned traitor. Conflicted, with nervous energy. Ultimately betrays Ada."
              />
            </FadeInSection>
          </div>
        </div>
        
        <div className="section-divider mx-auto mt-24 max-w-md" />
      </section>

      {/* Crew Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <FadeInSection>
            <h2 className="mb-16 text-center text-xs tracking-[0.5em] text-zinc-500" style={{ fontWeight: 100 }}>
              CREW
            </h2>
          </FadeInSection>
          
          <div className="grid gap-6 md:grid-cols-2">
            <FadeInSection>
              <CrewMember role="Writer & Director" name="Sam Fitch" />
            </FadeInSection>
            <FadeInSection delay={50}>
              <CrewMember role="Producer" name="Shayan Fouladi" />
            </FadeInSection>
            <FadeInSection delay={100}>
              <CrewMember role="Editor" name="Sam Fitch" />
            </FadeInSection>
            <FadeInSection delay={150}>
              <CrewMember role="Composer" name="Sam Fitch" />
            </FadeInSection>
            <FadeInSection delay={200}>
              <CrewMember role="VFX Supervisor" name="Sam Fitch" />
            </FadeInSection>
          </div>
        </div>
        
        <div className="section-divider mx-auto mt-24 max-w-md" />
      </section>

      {/* Production Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <FadeInSection>
            <p className="text-xs tracking-[0.5em] text-zinc-500" style={{ fontWeight: 100 }}>
              A PRODUCTION BY
            </p>
            <img
              src="/images/fps_logo.png"
              alt="Cardiff Film Production Society logo"
              className="mx-auto mt-4 max-h-42 w-auto"
            />
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center px-6 py-16">
        <h2 
          className="text-center"
          style={{ 
            fontFamily: "'Adversal', sans-serif",
            fontSize: "clamp(1.5rem, 6vw, 3rem)",
            letterSpacing: "0.2em",
          }}
        >
          Synthetica
        </h2>
        <p className="mt-4 text-xs tracking-widest text-zinc-600" style={{ fontWeight: 100 }}>
          COMING AUTUMN 2026
        </p>
      </footer>
    </main>
  );
}

// Intersection Observer based fade-in component
function FadeInSection({ 
  children, 
  delay = 0 
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
          // Once visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
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
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

// Character card component
function CharacterCard({ 
  name, 
  role, 
  description 
}: { 
  name: string; 
  role: string; 
  description: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-lg tracking-[0.2em] text-white" style={{ fontWeight: 300 }}>
        {name}
      </h3>
      <p className="mt-1 text-xs tracking-[0.3em] text-zinc-500" style={{ fontWeight: 100 }}>
        {role.toUpperCase()}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400" style={{ fontWeight: 200 }}>
        {description}
      </p>
    </div>
  );
}

// Crew member component
function CrewMember({ role, name }: { role: string; name: string }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-900 py-3">
      <span className="text-sm text-zinc-500" style={{ fontWeight: 100 }}>
        {role}
      </span>
      <span className="text-sm text-white" style={{ fontWeight: 200 }}>
        {name}
      </span>
    </div>
  );
}
