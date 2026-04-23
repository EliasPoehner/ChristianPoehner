"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactForm, type ContactFormState } from "@/lib/contact-action";

const initialState: ContactFormState = { success: false };

interface KontaktFormProps {
  dark?: boolean;
}

export default function KontaktForm({ dark = false }: KontaktFormProps) {
  const [state, formAction, isPending] = useActionState(sendContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const timestampRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (timestampRef.current) {
      timestampRef.current.value = Date.now().toString();
    }
  }, []);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  const inputStyle = {
    background: dark ? "rgba(255,255,255,0.08)" : "#f1f4f9",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    color: dark ? "#ffffff" : "#181c20",
    outline: "none",
    width: "100%",
    transition: "box-shadow 0.2s",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: dark ? "#8192a7" : "#44474c",
    marginBottom: "0.4rem",
    textTransform: dark ? "uppercase" as const : undefined,
    letterSpacing: dark ? "0.1em" : undefined,
  } as React.CSSProperties;

  const focusRing = dark ? "0 0 0 2px #006b5f, 0 0 8px rgba(0,107,95,0.3)" : "0 0 0 2px #006b5f";

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      {/* Honeypot – versteckt */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {/* Timestamp – versteckt */}
      <input ref={timestampRef} type="hidden" name="_timestamp" />

      {/* Name + E-Mail */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Max Mustermann"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.boxShadow = focusRing)}
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            E-Mail <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="ihre@email.de"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.boxShadow = focusRing)}
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
        </div>
      </div>

      {/* Betreff */}
      <div>
        <label htmlFor="betreff" style={labelStyle}>
          Betreff{" "}
          <span style={{ color: dark ? "#8192a7" : "#74777d", fontSize: "0.75rem", fontWeight: 400, textTransform: "none", letterSpacing: "normal" }}>
            (optional)
          </span>
        </label>
        <select
          id="betreff"
          name="betreff"
          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = focusRing)}
          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          <option value="">Bitte wählen…</option>
          <option>Allgemeine Anfrage</option>
          <option>Stadtratspolitik</option>
          <option>Digitalisierung</option>
          <option>Stadtentwicklung</option>
          <option>Terminanfrage</option>
          <option>Sonstiges</option>
        </select>
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="nachricht" style={labelStyle}>
          Nachricht <span className="text-red-400">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={6}
          placeholder="Wie kann ich Sie unterstützen?"
          style={{ ...inputStyle, resize: "none" }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = focusRing)}
          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
        />
      </div>

      {/* DSGVO */}
      <div className="flex items-start gap-3">
        <input
          id="dsgvo"
          name="dsgvo"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded"
          style={{ accentColor: "#006b5f" }}
        />
        <label
          htmlFor="dsgvo"
          className="text-sm"
          style={{ color: dark ? "#8192a7" : "#44474c" }}
        >
          Ich habe die{" "}
          <a
            href="/datenschutz"
            className="underline hover:text-secondary"
            style={{ color: dark ? "#76f4e0" : undefined }}
            target="_blank"
          >
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
          <span className="text-red-400">*</span>
        </label>
      </div>

      {/* Fehler */}
      {state.error && (
        <div className="rounded-xl px-4 py-3 text-sm" style={{ background: "#ffdad6", color: "#93000a" }}>
          {state.error}
        </div>
      )}

      {/* Erfolg */}
      {state.success && (
        <div className="rounded-xl px-4 py-3 text-sm" style={{ background: "#dcfce7", color: "#166534" }}>
          Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich so bald wie möglich.
        </div>
      )}

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className={`${dark ? "" : "btn-secondary"} px-10 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3 w-full justify-center rounded-lg font-semibold transition-all duration-200 hover:opacity-90`}
          style={dark ? {
            background: "linear-gradient(135deg, #006b5f, #00a593)",
            color: "#ffffff",
            fontFamily: "var(--font-headline)",
          } : undefined}
        >
          {isPending ? "Wird gesendet…" : (
            <>
              Nachricht senden
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
