"use client";

import React from "react";
import { useReservation } from "@/contexts/reservation-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin } from "lucide-react";

export function TableAvailabilitySummary() {
  const { state, dispatch, getTableAvailability } = useReservation();
  const availability = getTableAvailability();

  const handleViewTables = () => {
    dispatch({ type: "SET_SHOW_TABLE_MAP", payload: true });
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#FAF3E0] to-[#F5F5DC] dark:from-[#18181c] dark:to-[#232326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 bg-[#FFF8F0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6e6e6] border-none">
            Table Reservations
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#4B2E2B] dark:text-[#e6e6e6]">
            Reserve Your{" "}
            <span className="text-[#6F4E37] dark:text-[#e6b800]">
              Perfect Spot
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-[#4B2E2B] dark:text-[#e6e6e6] px-4">
            Plan your visit with our easy table reservation system. Check
            availability and book your preferred table in advance.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="text-center p-4 sm:p-6 bg-white dark:bg-[#222] rounded-xl sm:rounded-2xl shadow-lg border border-[#F5F5DC] dark:border-[#333]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
              {availability.available}
            </h3>
            <p className="text-sm sm:text-base text-[#6F4E37] dark:text-[#e6b800] font-medium">
              Tables Available
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-[#222] rounded-xl sm:rounded-2xl shadow-lg border border-[#F5F5DC] dark:border-[#333]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFF8F0] dark:bg-[#18181c] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-[#6F4E37] dark:text-[#e6b800]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
              {availability.total}
            </h3>
            <p className="text-sm sm:text-base text-[#6F4E37] dark:text-[#e6b800] font-medium">
              Total Tables
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-[#222] rounded-xl sm:rounded-2xl shadow-lg border border-[#F5F5DC] dark:border-[#F5F5DC]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFF8F0] dark:bg-[#18181c] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-[#6F4E37] dark:text-[#e6b800]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Instant
            </h3>
            <p className="text-sm sm:text-base text-[#6F4E37] dark:text-[#e6b800] font-medium">
              Booking
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6F4E37] dark:bg-[#e6b800] rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Flexible Seating
            </h4>
            <p className="text-xs sm:text-sm text-[#6F4E37] dark:text-[#e6b800]">
              Tables for 2-8 people
            </p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6F4E37] dark:bg-[#e6b800] rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Advance Booking
            </h4>
            <p className="text-xs sm:text-sm text-[#6F4E37] dark:text-[#e6b800]">
              Book up to 30 days ahead
            </p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6F4E37] dark:bg-[#e6b800] rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Visual Map
            </h4>
            <p className="text-xs sm:text-sm text-[#6F4E37] dark:text-[#e6b800]">
              See table layout & availability
            </p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6F4E37] dark:bg-[#e6b800] rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 text-[#4B2E2B] dark:text-[#e6e6e6]">
              Easy Management
            </h4>
            <p className="text-xs sm:text-sm text-[#6F4E37] dark:text-[#e6b800]">
              Modify or cancel anytime
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              onClick={handleViewTables}
              size="lg"
              className="bg-[#6F4E37] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-0 hover:bg-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333] text-sm sm:text-base"
            >
              <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View Table Map
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
