"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

export interface Table {
  id: number;
  name: string;
  capacity: number;
  position: { x: number; y: number };
  isBooked: boolean;
  bookingTime?: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  partySize?: number;
}

export interface ReservationState {
  tables: Table[];
  selectedTable: Table | null;
  showReservationModal: boolean;
  showTableMap: boolean;
  confirmation: {
    show: boolean;
    status: "success" | "error";
    title: string;
    message: string;
    table?: Table | null;
    time?: string;
  };
}

export type ReservationAction =
  | { type: "SET_TABLES"; payload: Table[] }
  | {
      type: "BOOK_TABLE";
      payload: { tableId: number; reservation: Partial<Table> };
    }
  | { type: "CANCEL_BOOKING"; payload: number }
  | { type: "SET_SELECTED_TABLE"; payload: Table | null }
  | { type: "SET_SHOW_RESERVATION_MODAL"; payload: boolean }
  | { type: "SET_SHOW_TABLE_MAP"; payload: boolean }
  | { type: "SHOW_CONFIRMATION"; payload: ReservationState["confirmation"] }
  | { type: "HIDE_CONFIRMATION" }
  | { type: "INITIALIZE_TABLES" };

const initialState: ReservationState = {
  tables: [],
  selectedTable: null,
  showReservationModal: false,
  showTableMap: false,
  confirmation: {
    show: false,
    status: "success",
    title: "",
    message: "",
    table: null,
    time: undefined,
  },
};

function reservationReducer(
  state: ReservationState,
  action: ReservationAction
): ReservationState {
  switch (action.type) {
    case "SET_TABLES":
      return { ...state, tables: action.payload };
    case "BOOK_TABLE":
      return {
        ...state,
        tables: state.tables.map((table) =>
          table.id === action.payload.tableId
            ? { ...table, ...action.payload.reservation, isBooked: true }
            : table
        ),
      };
    case "CANCEL_BOOKING":
      return {
        ...state,
        tables: state.tables.map((table) =>
          table.id === action.payload
            ? {
                ...table,
                isBooked: false,
                bookingTime: undefined,
                customerName: undefined,
                customerPhone: undefined,
                customerEmail: undefined,
                partySize: undefined,
              }
            : table
        ),
      };
    case "SET_SELECTED_TABLE":
      return { ...state, selectedTable: action.payload };
    case "SET_SHOW_RESERVATION_MODAL":
      return { ...state, showReservationModal: action.payload };
    case "SET_SHOW_TABLE_MAP":
      return { ...state, showTableMap: action.payload };
    case "SHOW_CONFIRMATION":
      return { ...state, confirmation: { ...action.payload, show: true } };
    case "HIDE_CONFIRMATION":
      return {
        ...state,
        confirmation: {
          show: false,
          status: "success",
          title: "",
          message: "",
          table: null,
          time: undefined,
        },
      };
    case "INITIALIZE_TABLES":
      const defaultTables: Table[] = [
        {
          id: 1,
          name: "Table 1",
          capacity: 2,
          position: { x: 100, y: 80 },
          isBooked: false,
        },
        {
          id: 2,
          name: "Table 2",
          capacity: 2,
          position: { x: 200, y: 80 },
          isBooked: false,
        },
        {
          id: 3,
          name: "Table 3",
          capacity: 4,
          position: { x: 300, y: 80 },
          isBooked: false,
        },
        {
          id: 4,
          name: "Table 4",
          capacity: 4,
          position: { x: 400, y: 80 },
          isBooked: false,
        },
        {
          id: 5,
          name: "Table 5",
          capacity: 6,
          position: { x: 150, y: 200 },
          isBooked: false,
        },
        {
          id: 6,
          name: "Table 6",
          capacity: 6,
          position: { x: 350, y: 200 },
          isBooked: false,
        },
        {
          id: 7,
          name: "Table 7",
          capacity: 8,
          position: { x: 250, y: 320 },
          isBooked: false,
        },
        {
          id: 8,
          name: "Table 8",
          capacity: 2,
          position: { x: 100, y: 400 },
          isBooked: false,
        },
        {
          id: 9,
          name: "Table 9",
          capacity: 2,
          position: { x: 400, y: 400 },
          isBooked: false,
        },
      ];
      return { ...state, tables: defaultTables };
    default:
      return state;
  }
}

interface ReservationContextType {
  state: ReservationState;
  dispatch: React.Dispatch<ReservationAction>;
  getAvailableTables: () => Table[];
  getBookedTables: () => Table[];
  getTableAvailability: () => {
    total: number;
    available: number;
    booked: number;
  };
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

export function ReservationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reservationReducer, initialState);

  useEffect(() => {
    // Initialize tables on mount
    dispatch({ type: "INITIALIZE_TABLES" });

    // Load existing reservations from localStorage
    const savedReservations = localStorage.getItem("tableReservations");
    if (savedReservations) {
      try {
        const reservations = JSON.parse(savedReservations);
        dispatch({ type: "SET_TABLES", payload: reservations });
      } catch (error) {
        console.error("Error loading reservations:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Save reservations to localStorage whenever tables change
    localStorage.setItem("tableReservations", JSON.stringify(state.tables));
  }, [state.tables]);

  const getAvailableTables = () =>
    state.tables.filter((table) => !table.isBooked);
  const getBookedTables = () => state.tables.filter((table) => table.isBooked);

  const getTableAvailability = () => ({
    total: state.tables.length,
    available: getAvailableTables().length,
    booked: getBookedTables().length,
  });

  const value: ReservationContextType = {
    state,
    dispatch,
    getAvailableTables,
    getBookedTables,
    getTableAvailability,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
