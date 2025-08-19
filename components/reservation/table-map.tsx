"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReservation } from "@/contexts/reservation-context";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export function TableMap() {
  const { state, dispatch, getTableAvailability } = useReservation();
  const availability = getTableAvailability();

  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mapWidth, setMapWidth] = useState<number>(500);

  useEffect(() => {
    const update = () => {
      if (mapRef.current) {
        setMapWidth(mapRef.current.clientWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const BASE_SIZE = 500; // baseline design width/height for coordinates
  const outerScale = Math.max(0.5, Math.min(mapWidth / BASE_SIZE, 1.6));
  const PADDING = Math.max(16, Math.round(mapWidth * 0.06));
  const LABEL_BAND = Math.max(44, Math.round(mapWidth * 0.12)); // reserved space at bottom for labels

  // Compute content bounding box from table positions and their base sizes
  const getBaseSize = (capacity: number) =>
    capacity <= 2 ? 60 : capacity <= 4 ? 80 : 100;
  const positions = state.tables.map((t) => ({
    x: t.position.x,
    y: t.position.y,
    s: getBaseSize(t.capacity),
  }));
  const minX = Math.min(...positions.map((p) => p.x));
  const minY = Math.min(...positions.map((p) => p.y));
  const maxX = Math.max(...positions.map((p) => p.x + p.s));
  const maxY = Math.max(...positions.map((p) => p.y + p.s));
  const contentW = Math.max(1, maxX - minX);
  const contentH = Math.max(1, maxY - minY);

  const innerW = Math.max(1, mapWidth - 2 * PADDING);
  const innerH = Math.max(1, mapWidth - 2 * PADDING - LABEL_BAND);
  const fitScale = Math.max(
    0.4,
    Math.min(innerW / contentW, innerH / contentH, 2)
  );

  // Compute top-left origin so content is centered within inner area
  const originX =
    PADDING + (innerW - contentW * fitScale) / 2 - minX * fitScale;
  const originY =
    PADDING + (innerH - contentH * fitScale) / 2 - minY * fitScale;

  const handleTableClick = (table: any) => {
    if (table.isBooked) {
      dispatch({ type: "SET_SELECTED_TABLE", payload: table });
    } else {
      dispatch({ type: "SET_SELECTED_TABLE", payload: table });
      dispatch({ type: "SET_SHOW_RESERVATION_MODAL", payload: true });
    }
  };

  const getTableColor = (table: any) => {
    if (table.isBooked) {
      return "bg-red-500 hover:bg-red-600";
    }
    return "bg-green-500 hover:bg-green-600";
  };

  const getTableBorder = (table: any) => {
    if (table.isBooked) {
      return "border-2 border-red-600";
    }
    if (state.selectedTable?.id === table.id) {
      return "border-4 border-blue-500 shadow-lg shadow-blue-500/50";
    }
    return "border-2 border-green-600";
  };

  const getTableSize = (capacity: number) => {
    const base = getBaseSize(capacity);
    const size = Math.round(base * fitScale);
    return Math.max(32, size); // enforce minimum touch size
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-4 sm:py-6 px-4 sm:px-0">
      {/* Availability Summary */}
      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white dark:bg-[#222] rounded-xl sm:rounded-2xl shadow-lg border border-[#F5F5DC] dark:border-[#333]">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#4B2E2B] dark:text-[#e6e6e6] text-center">
          Table Availability
        </h3>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div className="p-3 sm:p-4 bg-[#FFF8F0] dark:bg-[#18181c] rounded-lg sm:rounded-xl border border-[#F5F5DC] dark:border-[#333]">
            <div className="text-2xl sm:text-3xl font-bold text-[#6F4E37] dark:text-[#e6b800]">
              {availability.total}
            </div>
            <div className="text-xs sm:text-sm text-[#4B2E2B] dark:text-[#e6e6e6]">
              Total Tables
            </div>
          </div>
          <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl border border-green-200 dark:border-green-800">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
              {availability.available}
            </div>
            <div className="text-xs sm:text-sm text-green-700 dark:text-green-300">
              Available
            </div>
          </div>
          <div className="p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 rounded-lg sm:rounded-xl border border-red-200 dark:border-red-800">
            <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400">
              {availability.booked}
            </div>
            <div className="text-xs sm:text-sm text-red-700 dark:text-red-300">
              Booked
            </div>
          </div>
        </div>
      </div>

      {/* Table Map */}
      <div className="relative bg-gradient-to-br from-[#FAF3E0] to-[#F5F5DC] dark:from-[#18181c] dark:to-[#232326] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-2 border-[#F5F5DC] dark:border-[#333] shadow-xl">
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold text-[#4B2E2B] dark:text-[#e6e6e6]">
            Floor Plan
          </h3>
          <p className="text-xs sm:text-sm text-[#6F4E37] dark:text-[#e6b800]">
            Click on a table to book or view details
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-green-600"></div>
            <span className="text-[#4B2E2B] dark:text-[#e6e6e6]">
              Available
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-red-600"></div>
            <span className="text-[#4B2E2B] dark:text-[#e6e6e6]">Booked</span>
          </div>
        </div>

        {/* Tables Grid (square area that scales) */}
        <div className="relative w-full mx-auto flex justify-center">
          <div
            ref={mapRef}
            className="relative w-full max-w-[800px] md:max-w-[640px] lg:max-w-[720px] xl:max-w-[800px] mx-auto"
            style={{ height: mapWidth }}
          >
            {/* Padded play area (visual guidance, no render) */}
            {state.tables.map((table) => {
              const size = getTableSize(table.capacity);
              const left = Math.round(originX + table.position.x * fitScale);
              const top = Math.round(originY + table.position.y * fitScale);
              return (
                <div
                  key={table.id}
                  onClick={() => handleTableClick(table)}
                  className={`absolute cursor-pointer transition-all duration-200 transform hover:scale-110 ${getTableColor(
                    table
                  )} ${getTableBorder(table)} rounded-lg shadow-lg`}
                  style={{ left, top, width: size, height: size }}
                >
                  <div className="flex items-center justify-center h-full w-full px-1">
                    <div className="w-full text-center text-white font-medium leading-tight">
                      <div className="font-bold text-[10px] sm:text-xs truncate">
                        {table.name}
                      </div>
                      <div className="flex items-center justify-center gap-1 mt-1 text-[10px] sm:text-xs">
                        <Users className="w-3 h-3" />
                        <span className="truncate">{table.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Decorative elements */}
            <div
              className="absolute bg-white dark:bg-[#222] px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-md border border-[#F5F5DC] dark:border-[#333] pointer-events-none select-none"
              style={{
                left: Math.max(8, PADDING),
                bottom: Math.max(8, PADDING / 2),
              }}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-sm sm:text-lg">🚪</span>
                <span className="text-xs sm:text-sm font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Entrance
                </span>
              </div>
            </div>
            <div
              className="absolute bg-white dark:bg-[#222] px-2 sm:px-3 py-1 sm:py-2 rounded-lg shadow-md border border-[#F5F5DC] dark:border-[#333] pointer-events-none select-none"
              style={{
                right: Math.max(8, PADDING),
                bottom: Math.max(8, PADDING / 2),
              }}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-sm sm:text-lg">☕</span>
                <span className="text-xs sm:text-sm font-medium text-[#4B2E2B] dark:text-[#e6e6e6]">
                  Counter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Text */}
      {!state.selectedTable && (
        <div className="mt-3 sm:mt-4 text-center px-4">
          <p className="text-xs sm:text-sm text-[#6F4E37] dark:text-[#e6b800]">
            💡 Click on any available table (green) to select it, then make a
            Reservation.
          </p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <Button
          onClick={() =>
            dispatch({ type: "SET_SHOW_TABLE_MAP", payload: false })
          }
          variant="outline"
          className="border-[#6F4E37] text-[#6F4E37] hover:bg-[#6F4E37] hover:text-white dark:border-[#e6b800] dark:text-[#e6b800] dark:hover:bg-[#e6b800] dark:hover:text-[#222] text-sm sm:text-base"
        >
          Close Map
        </Button>
      </div>
    </div>
  );
}
