"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactForm, type ContactFormState } from "@/lib/contact-action";

const initialState: ContactFormState = { success: false };

export default function KontaktForm() {
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

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      {/* Honeypot – versteckt */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {/* Timestamp – versteckt */}
      <input ref={timestampRef} type="hidden" name="_timestamp" />

      {/* Name + E-Mail */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Max Mustermann"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="ihre@email.de"
            className="form-input"
          />
        </div>
      </div>

      {/* Betreff */}
      <div>
        <label htmlFor="betreff" className="form-label">
          Betreff <span className="text-neutral-400 text-xs font-normal">(optional)</span>
        </label>
        <input
          id="betreff"
          name="betreff"
          type="text"
          placeholder="Worum geht es?"
          className="form-input"
        />
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="nachricht" className="form-label">
          Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          required
          rows={5}
          placeholder="Ihre Nachricht..."
          className="form-input resize-none"
        />
      </div>

      {/* DSGVO */}
      <div className="flex items-start gap-3">
        <input
          id="dsgvo"
          name="dsgvo"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-neutral-300 text-[#1a3a5c] focus:ring-[#1a3a5c]/20"
        />
        <label htmlFor="dsgvo" className="text-sm text-neutral-600">
          Ich habe die{" "}
          <a href="/datenschutz" className="underline hover:text-[#1a3a5c]" target="_blank">
            Datenschutzerklärung
          </a>{" "}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Fehler */}
      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      {/* Erfolg */}
      {state.success && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich so bald wie möglich.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Wird gesendet…" : "Nachricht senden"}
      </button>
    </form>
  );
}
