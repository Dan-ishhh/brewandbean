"use client";

import React from "react";
import { useReservation } from "@/contexts/reservation-context";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Calendar, Users } from "lucide-react";

export function ReservationConfirmationModal() {
  const { state, dispatch } = useReservation();
  const { confirmation } = state;

  if (!confirmation.show) return null;

  const isSuccess = confirmation.status === "success";

  const handleClose = () => {
    dispatch({ type: "HIDE_CONFIRMATION" });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm sm:max-w-md overflow-hidden rounded-2xl shadow-2xl border border-[#F5F5DC] dark:border-[#333]">
        {/* Header Bar */}
        <div
          className={`${
            isSuccess
              ? "bg-[#EAF7E9] dark:bg-green-900/20"
              : "bg-[#FDECEC] dark:bg-red-900/20"
          } px-5 py-4`}
        >
          <div className="flex items-center gap-3">
            {isSuccess ? (
              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
            ) : (
              <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            )}
            <h3 className="text-lg sm:text-xl font-semibold text-[#4B2E2B] dark:text-[#e6e6e6]">
              {confirmation.title ||
                (isSuccess ? "Reservation Confirmed" : "Reservation Failed")}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white dark:bg-[#222] px-5 py-5 sm:py-6">
          <p className="text-sm sm:text-base text-[#4B2E2B] dark:text-[#e6e6e6] mb-4">
            {confirmation.message ||
              (isSuccess
                ? "Your table has been successfully reserved. We look forward to serving you!"
                : "We couldn’t complete your reservation. Please try again.")}
          </p>

          {confirmation.table && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-[#FFF8F0] dark:bg-[#18181c] rounded-xl border border-[#F5F5DC] dark:border-[#333] p-4 mb-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#6F4E37] dark:text-[#e6b800]" />
                <span className="text-sm text-[#4B2E2B] dark:text-[#e6e6e6]">
                  {confirmation.table.name} • {confirmation.table.capacity}{" "}
                  seats
                </span>
              </div>
              {confirmation.time && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#6F4E37] dark:text-[#e6b800]" />
                  <span className="text-sm text-[#4B2E2B] dark:text-[#e6e6e6]">
                    {confirmation.time}
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={handleClose}
              className="border-[#6F4E37] text-[#6F4E37] hover:bg-[#6F4E37] hover:text-white dark:border-[#e6b800] dark:text-[#e6b800] dark:hover:bg-[#e6b800] dark:hover:text-[#222]"
            >
              Close
            </Button>
            {isSuccess && (
              <Button
                onClick={handleClose}
                className="bg-[#6F4E37] text-white hover:bg-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333]"
              >
                Done
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
