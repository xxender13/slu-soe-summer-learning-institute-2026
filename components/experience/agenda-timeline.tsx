"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import type { AgendaDay } from "@/types/event-2026";

export function AgendaTimeline({ days }: { days: AgendaDay[] }) {
  const [open, setOpen] = useState(`${days[0].day}-0`);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {days.map((day) => (
        <div key={day.day} className="rounded-xl border bg-card p-6 shadow-card">
          <p className="font-label text-eyebrow font-semibold uppercase text-primary">{day.day}</p>
          <h3 className="mt-3 font-heading text-3xl font-bold">{day.date}</h3>
          <p className="mt-2 font-body text-muted-foreground">{day.theme}</p>
          <div className="mt-7 grid gap-3">
            {day.sessions.map((session, index) => {
              const id = `${day.day}-${index}`;
              const isOpen = open === id;
              return (
                <button
                  key={id}
                  type="button"
                  className="rounded-lg border p-4 text-left transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => setOpen(isOpen ? "" : id)}
                  aria-expanded={isOpen}
                >
                  <span className="font-label text-xs font-semibold uppercase tracking-[0.14em] text-primary">{session.time} · {session.format}</span>
                  <span className="mt-2 block font-heading text-xl font-bold text-card-foreground">{session.title}</span>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.span
                        className="mt-3 block font-body text-base leading-7 text-muted-foreground"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {session.description}
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
