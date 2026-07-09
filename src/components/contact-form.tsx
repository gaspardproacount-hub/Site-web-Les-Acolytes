"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${name || "un visiteur du site"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-ink/70">Votre nom</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-wine"
            placeholder="Nom et prénom"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-medium text-ink/70">Votre email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-wine"
            placeholder="vous@exemple.fr"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-ink/70">Votre message</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="rounded-lg border border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-wine"
          placeholder="Dites-nous en plus sur votre demande (réservation, événement, question...)"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-wine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine-dark"
      >
        Envoyer le message
      </button>
      <p className="text-xs text-ink/50">
        L&apos;envoi ouvre votre messagerie habituelle, pré-remplie à
        destination de {site.email}.
      </p>
    </form>
  );
}
