import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";

type Location = {
  name: string;
  position: { lat: number; lng: number };
  rating: number;
  hours: string;
};

const locations: Location[] = [
  {
    name: "Brew & Bean",
    position: { lat: 23.0225, lng: 72.5714 },
    rating: 4.7,
    hours: "7:00 AM - 10:00 PM",
  },
  {
    name: "Brew & Bean",
    position: { lat: 23.03, lng: 72.58 },
    rating: 4.5,
    hours: "8:00 AM - 9:00 PM",
  },
  {
    name: "Brew & Bean",
    position: { lat: 23.035, lng: 72.565 },
    rating: 4.6,
    hours: "6:30 AM - 8:30 PM",
  },
  {
    name: "Brew & Bean",
    position: { lat: 23.04, lng: 72.575 },
    rating: 4.8,
    hours: "7:30 AM - 11:00 PM",
  },
];

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "1.5rem",
};

const center = { lat: 23.03, lng: 72.57 };

export function GoogleMapLocations() {
  const [selected, setSelected] = useState<Location | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) {
    return (
      <div
        className="flex items-center justify-center h-full w-full"
        style={{
          minHeight: "300px",
          background: "linear-gradient(to bottom right, #FAF3E0, #F5F5DC)",
          borderRadius: "1.5rem",
        }}
      >
        <span className="text-lg font-semibold text-[#6F4E37] animate-pulse">
          Loading map...
        </span>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={{
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        scrollwheel: true,
        gestureHandling: "greedy",
        zoomControl: true,
        draggable: true,
        styles: [
          {
            featureType: "poi.business",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#e5e3df" }],
          },
        ],
      }}
    >
      {locations.map((loc, idx) => (
        <Marker
          key={idx}
          position={loc.position}
          onClick={() => setSelected(loc)}
          icon={{
            url: "/coffee-cup.png",
            scaledSize:
              typeof window !== "undefined" && window.google
                ? new window.google.maps.Size(24, 24)
                : undefined,
            anchor:
              typeof window !== "undefined" && window.google
                ? new window.google.maps.Point(12, 32)
                : undefined,
          }}
        />
      ))}
      {selected && (
        <InfoWindow
          position={{
            lat: selected.position.lat + 0.0012,
            lng: selected.position.lng,
          }}
          onCloseClick={() => setSelected(null)}
          options={{
            pixelOffset:
              typeof window !== "undefined" && window.google
                ? new window.google.maps.Size(0, -32)
                : undefined,
          }}
        >
          <div
            className="min-w-[180px] px-4 py-2 rounded-xl shadow-lg border"
            style={{
              background: "linear-gradient(to bottom right, #FFF8F0, #FAF3E0)",
              borderColor: "#F5F5DC",
              color: "#4B2E2B",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <div
              className="flex items-center gap-2 font-bold text-base mb-1"
              style={{ color: "#6F4E37" }}
            >
              <img
                src="/coffee-cup.png"
                alt="Cafe"
                className="w-5 h-5 rounded-full"
              />
              {selected.name}
            </div>
            <div className="text-sm mb-1" style={{ color: "#4B2E2B" }}>
              Rating:{" "}
              <span className="font-semibold" style={{ color: "#E6B800" }}>
                {selected.rating} <span style={{ fontSize: "1.1em" }}>★</span>
              </span>
            </div>
            <div className="text-sm" style={{ color: "#228B22" }}>
              Hours: <span className="font-semibold">{selected.hours}</span>
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
