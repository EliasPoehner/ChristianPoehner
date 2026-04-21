"use client";

import { useState } from "react";
import { standpunkte } from "@/content/standpunkte";

export default function StandpunkteQA() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: "#f1f4f9" }}
    >
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-12">
          <span
            className="font-bold text-secondary text-xs uppercase tracking-[0.2em] block mb-3"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Direkte Antworten
          </span>
          <h2
            className="font-extrabold text-4xl text-primary mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Häufige Fragen
          </h2>
          <div className="h-1.5 w-20 rounded-full" style={{ background: "#006b5f" }} />
          <p className="mt-5 text-on-surface-muted text-lg max-w-xl">
            Was ich denke – direkt und ohne Politsprech.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 max-w-3xl">
          {standpunkte.map((sp) => {
            const isOpen = openId === sp.id;
            return (
              <div
                key={sp.id}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: isOpen ? "#ffffff" : "#ffffff",
                  boxShadow: isOpen
                    ? "0 12px 32px rgba(24,28,32,0.08)"
                    : "0 4px 12px rgba(24,28,32,0.04)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                  onClick={() => setOpenId(isOpen ? null : sp.id)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm font-bold text-primary pr-4"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {sp.frage}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isOpen ? "#006b5f" : "rgba(118, 244, 224, 0.3)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      style={{ color: isOpen ? "#ffffff" : "#006b5f" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <div
                      className="h-px mb-4"
                      style={{ background: "rgba(196,198,205,0.3)" }}
                    />
                    <p className="text-sm leading-relaxed text-on-surface-muted">
                      {sp.antwort}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
