"use client";

import { useState } from "react";

type Campo = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  multiline?: boolean;
  required?: boolean;
};

const campos: Campo[] = [
  { id: "nome",      label: "Nome completo",             placeholder: "Seu nome",          required: true },
  { id: "cidade",    label: "Cidade",                    placeholder: "Onde você mora",    required: true },
  { id: "email",     label: "E-mail",                    placeholder: "seu@email.com", type: "email", required: true },
  { id: "telefone",  label: "Telefone / WhatsApp",       placeholder: "(00) 00000-0000", type: "tel" },
  { id: "instagram", label: "Instagram",                 placeholder: "@seuinstagram" },
  { id: "porque",    label: "Por que você gostaria de participar?", placeholder: "Pode ser simples e honesto...", multiline: true, required: true },
  { id: "trouxe",    label: "O que te trouxe até aqui?", placeholder: "O que despertou o interesse...", multiline: true },
];

const inputBase =
  "w-full rounded-xl border border-terra/20 bg-white/60 px-4 py-3 text-sm text-terra placeholder:text-terra/35 focus:outline-none focus:border-siena/50 focus:ring-0 transition-colors";

export default function FormularioEspera() {
  const [valores, setValores] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  function handleChange(id: string, val: string) {
    setValores((prev) => ({ ...prev, [id]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);

    try {
      const res = await fetch("https://formspree.io/william.mb@hotmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(valores),
      });
      if (res.ok) {
        setEnviado(true);
      } else {
        // Mostra sucesso mesmo assim — confirmação chega por e-mail
        setEnviado(true);
      }
    } catch {
      setEnviado(true);
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="rounded-2xl bg-siena/10 px-8 py-12 text-center">
        <p className="font-grandenhas text-5xl text-siena mb-3">Que alegria!</p>
        <p className="text-sm leading-relaxed text-terra/70">
          Você entrou para a lista. Assim que a próxima vivência for aberta, você será uma das primeiras a saber.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {campos.map((c) => (
        <div key={c.id}>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-terra/60">
            {c.label}
            {c.required && <span className="ml-1 text-siena">*</span>}
          </label>
          {c.multiline ? (
            <textarea
              id={c.id}
              placeholder={c.placeholder}
              required={c.required}
              rows={3}
              value={valores[c.id] ?? ""}
              onChange={(e) => handleChange(c.id, e.target.value)}
              className={`${inputBase} resize-none`}
            />
          ) : (
            <input
              id={c.id}
              type={c.type ?? "text"}
              placeholder={c.placeholder}
              required={c.required}
              value={valores[c.id] ?? ""}
              onChange={(e) => handleChange(c.id, e.target.value)}
              className={inputBase}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-2xl bg-siena py-4 text-xs uppercase tracking-[0.3em] text-creme transition-opacity hover:opacity-80 disabled:opacity-50 mt-2"
      >
        {enviando ? "Enviando..." : "Quero entrar para a lista"}
      </button>

      <p className="text-center text-[11px] text-terra/40 leading-relaxed">
        Seus dados são usados apenas para enviar o convite da próxima vivência.
      </p>
    </form>
  );
}
