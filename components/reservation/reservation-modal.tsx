"use client";

import React, { useEffect, useState } from "react";
import { useReservation } from "@/contexts/reservation-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Users, Calendar, Clock, Phone, Mail, User } from "lucide-react";

export function ReservationModal() {
  const { state, dispatch } = useReservation();
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    partySize: "",
    bookingDate: "",
    bookingTime: "",
  });

  useEffect(() => {
    if (state.showReservationModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [state.showReservationModal]);

  if (!state.showReservationModal || !state.selectedTable) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.customerName ||
      !formData.customerPhone ||
      !formData.partySize ||
      !formData.bookingDate ||
      !formData.bookingTime
    ) {
      dispatch({
        type: "SHOW_CONFIRMATION",
        payload: {
          show: true,
          status: "error",
          title: "Missing Details",
          message:
            "Please fill in all required fields to complete your reservation.",
          table: state.selectedTable,
          time: undefined,
        },
      });
      return;
    }

    const reservation = {
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
      customerEmail: formData.customerEmail,
      partySize: parseInt(formData.partySize),
      bookingTime: `${formData.bookingDate} ${formData.bookingTime}`,
    };

    dispatch({
      type: "BOOK_TABLE",
      payload: {
        tableId: state.selectedTable!.id,
        reservation,
      },
    });

    // Show themed confirmation modal
    dispatch({
      type: "SHOW_CONFIRMATION",
      payload: {
        show: true,
        status: "success",
        title: "Reservation Confirmed",
        message: `Reservation confirmed for ${formData.customerName}.`,
        table: state.selectedTable,
        time: `${formData.bookingDate} ${formData.bookingTime}`,
      },
    });

    // Reset form and close modal
    setFormData({
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      partySize: "",
      bookingDate: "",
      bookingTime: "",
    });
    dispatch({ type: "SET_SHOW_RESERVATION_MODAL", payload: false });
    dispatch({ type: "SET_SELECTED_TABLE", payload: null });
    dispatch({ type: "SET_SHOW_TABLE_MAP", payload: false });
  };

  const handleClose = () => {
    dispatch({ type: "SET_SHOW_RESERVATION_MODAL", payload: false });
    dispatch({ type: "SET_SELECTED_TABLE", payload: null });
    setFormData({
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      partySize: "",
      bookingDate: "",
      bookingTime: "",
    });
  };

  const table = state.selectedTable;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white dark:bg-[#222] rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#F5F5DC] dark:border-[#333]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#4B2E2B] dark:text-[#e6e6e6]">
            Book Table
          </h2>
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="text-[#6F4E37] dark:text-[#e6b800] hover:bg-[#FAF3E0] dark:hover:bg-[#333]"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        {/* Table Info */}
        <div className="p-4 sm:p-6 bg-[#FFF8F0] dark:bg-[#18181c] border-b border-[#F5F5DC] dark:border-[#333]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6F4E37] dark:bg-[#e6b800] rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-[#4B2E2B] dark:text-[#e6e6e6]">
                {table?.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#6F4E37] dark:text-[#e6b800]">
                Capacity: {table?.capacity} people
              </p>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 sm:p-6 space-y-3 sm:space-y-4"
        >
          <div className="space-y-2">
            <Label
              htmlFor="customerName"
              className="text-sm sm:text-base text-[#4B2E2B] dark:text-[#e6e6e6]"
            >
              Full Name <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6F4E37] dark:text-[#e6b800]" />
              <Input
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="pl-10 border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:border-[#6F4E37] dark:focus:border-[#e6b800] text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="customerPhone"
              className="text-sm sm:text-base text-[#4B2E2B] dark:text-[#e6e6e6]"
            >
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6F4E37] dark:text-[#e6b800]" />
              <Input
                id="customerPhone"
                name="customerPhone"
                type="tel"
                value={formData.customerPhone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="pl-10 border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:border-[#6F4E37] dark:focus:border-[#e6b800] text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="customerEmail"
              className="text-sm sm:text-base text-[#4B2E2B] dark:text-[#e6e6e6]"
            >
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6F4E37] dark:text-[#e6b800]" />
              <Input
                id="customerEmail"
                name="customerEmail"
                type="email"
                value={formData.customerEmail}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="pl-10 border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:border-[#6F4E37] dark:focus:border-[#e6b800] text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="partySize"
              className="text-sm sm:text-base text-[#4B2E2B] dark:text-[#e6e6e6]"
            >
              Party Size <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.partySize}
              onValueChange={(value) => handleSelectChange("partySize", value)}
            >
              <SelectTrigger className="border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:border-[#6F4E37] dark:focus:border-[#e6b800] text-sm sm:text-base">
                <SelectValue placeholder="Select party size" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: table?.capacity || 8 },
                  (_, i) => i + 1
                ).map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size} {size === 1 ? "person" : "people"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="bookingDate"
                className="text-sm sm:text-base text-[#4B2E2B] dark:text-[#e6e6e6]"
              >
                Date <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6F4E37] dark:text-[#e6b800]" />
                <Input
                  id="bookingDate"
                  name="bookingDate"
                  type="date"
                  value={formData.bookingDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="pl-10 border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:border-[#6F4E37] dark:focus:border-[#e6b800] text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="bookingTime"
                className="text-sm sm:text-base text-[#4B2E2B] dark:text-[#e6e6e6]"
              >
                Time <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6F4E37] dark:text-[#e6b800] z-10" />
                <Select
                  value={formData.bookingTime}
                  onValueChange={(value) =>
                    handleSelectChange("bookingTime", value)
                  }
                >
                  <SelectTrigger className="pl-10 border-[#F5F5DC] dark:border-[#333] bg-[#FFF8F0] dark:bg-[#18181c] text-[#4B2E2B] dark:text-[#e6e6e6] focus:border-[#6F4E37] dark:focus:border-[#e6b800] text-sm sm:text-base">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "09:00",
                      "09:30",
                      "10:00",
                      "10:30",
                      "11:00",
                      "11:30",
                      "12:00",
                      "12:30",
                      "13:00",
                      "13:30",
                      "14:00",
                      "14:30",
                      "15:00",
                      "15:30",
                      "16:00",
                      "16:30",
                      "17:00",
                      "17:30",
                      "18:00",
                      "18:30",
                      "19:00",
                      "19:30",
                      "20:00",
                      "20:30",
                    ].map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-3 sm:pt-4">
            <Button
              type="submit"
              className="w-full bg-[#6F4E37] text-white hover:bg-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] dark:hover:bg-[#333] py-2 sm:py-3 rounded-xl text-sm sm:text-base"
            >
              Confirm Reservation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
