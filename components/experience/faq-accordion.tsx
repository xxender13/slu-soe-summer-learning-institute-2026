"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y rounded-xl border bg-card shadow-card">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span className="font-heading text-xl font-bold">{item.question}</span>
              <Plus className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-45" : ""}`} aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                  <p className="px-6 pb-6 font-body text-lg leading-8 text-muted-foreground">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
