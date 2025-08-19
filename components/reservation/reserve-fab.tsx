"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useReservation } from "@/contexts/reservation-context";

export function ReserveFab() {
  const { dispatch } = useReservation();

  const handleClick = () => {
    // Ensure the map section is visible
    dispatch({ type: "SET_SHOW_TABLE_MAP", payload: true });
    // Smooth scroll to reservation anchor
    setTimeout(() => {
      const el = document.getElementById("reservation");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[70]">
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full shadow-xl px-5 py-4 bg-[#6F4E37] text-white hover:bg-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333] border-0"
        aria-label="Reserve a Table"
      >
        <Calendar className="mr-2 h-5 w-5" />
        Reserve a Table
      </Button>
    </div>
  );
}
