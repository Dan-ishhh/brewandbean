import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Aarav S.",
    text: "Best coffee in town! The ambiance is cozy and the staff is super friendly.",
    rating: 5,
  },
  {
    name: "Priya M.",
    text: "Love the pastries and the seasonal drinks. Always a treat!",
    rating: 5,
  },
  {
    name: "Rahul K.",
    text: "Great place to work or relax. Free WiFi and delicious food.",
    rating: 4,
  },
  {
    name: "Sneha T.",
    text: "The avocado toast is my favorite. Highly recommend!",
    rating: 5,
  },
  {
    name: "Vikram D.",
    text: "Friendly staff and quick service. Will visit again!",
    rating: 4,
  },
];

export function ReviewsSlider() {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (isDesktop) {
          // Show 2 reviews at a time
          return (prev + 2) % reviews.length;
        }
        return (prev + 1) % reviews.length;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, [isDesktop]);

  // Get reviews to show
  const shownReviews = isDesktop
    ? [reviews[current], reviews[(current + 1) % reviews.length]]
    : [reviews[current]];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 relative">
      {/* Subtle blurred background for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-24 w-56 h-56 rounded-full mix-blend-multiply filter blur-2xl opacity-20 bg-[#6F4E37]"></div>
        <div className="absolute bottom-10 left-40 w-56 h-56 rounded-full mix-blend-multiply filter blur-2xl opacity-20 bg-[#e6b800]"></div>
      </div>
      <div className="relative z-10">
        <div className="rounded-xl shadow-lg p-8 bg-white dark:bg-[#222] border border-[#e6b800] dark:border-[#6F4E37]">
          <div
            className={`grid ${
              isDesktop ? "grid-cols-2 gap-8" : "grid-cols-1"
            }`}
          >
            {shownReviews.map((review, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-center px-6 py-8 bg-white dark:bg-[#222] rounded-lg shadow-sm border border-[#f5f5dc] dark:border-[#333]"
              >
                <span className="font-semibold text-lg mb-2 text-[#6F4E37] dark:text-[#e6b800]">
                  {review.name}
                </span>
                <span className="flex gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </span>
                <p className="text-left text-[#4B2E2B] dark:text-[#e6e6e6] mt-2">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-none focus:outline-none ${
                  current === idx ||
                  (isDesktop && (current + 1) % reviews.length === idx)
                    ? "bg-[#6F4E37] dark:bg-[#e6b800] scale-125"
                    : "bg-[#F5F5DC] dark:bg-[#333]"
                }`}
                aria-label={`Go to review ${idx + 1}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
