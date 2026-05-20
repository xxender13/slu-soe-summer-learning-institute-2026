"use client";

import { useEffect, useMemo, useState } from "react";

function getTimeParts(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const distance = Math.max(target - now, 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }));
  const items = useMemo(
    () => [
      ["Days", time.days],
      ["Hours", time.hours],
      ["Minutes", time.minutes],
      ["Seconds", time.seconds]
    ],
    [time]
  );

  useEffect(() => {
    setIsMounted(true);
    setTime(getTimeParts(targetDate));
    const timer = window.setInterval(() => setTime(getTimeParts(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 overflow-hidden rounded-lg border border-primary-foreground/20 bg-primary-foreground/[0.08] backdrop-blur">
      {items.map(([label, value]) => (
        <div key={label} className="border-r border-primary-foreground/15 p-4 text-center last:border-r-0 sm:p-5">
          <p className="font-heading text-2xl font-bold text-primary-foreground sm:text-4xl">
            {isMounted ? String(value).padStart(2, "0") : "--"}
          </p>
          <p className="mt-1 font-label text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">{label}</p>
        </div>
      ))}
    </div>
  );
}
