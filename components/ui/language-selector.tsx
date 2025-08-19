"use client";
import { useLanguage } from "@/contexts/language-context";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex gap-2 items-center">
      <span className="font-medium">Language:</span>
      <div className="relative">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
          className="appearance-none px-5 py-2 rounded-xl shadow-lg border font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6F4E37] bg-[#FFF8F0] text-[#4B2E2B] border-[#F5F5DC] hover:bg-[#FAF3E0] hover:text-[#6F4E37] dark:bg-[#222] dark:text-[#e6b800] dark:border-[#e6b800] dark:hover:bg-[#333] dark:hover:text-[#e6b800] w-[120px] cursor-pointer"
        >
          {LANGUAGES.map((lang) => (
            <option
              key={lang.code}
              value={lang.code}
              className="bg-[#FFF8F0] text-[#4B2E2B] dark:bg-[#222] dark:text-[#e6b800] font-semibold px-4 py-2 cursor-pointer"
              style={{
                backgroundColor: language === lang.code ? "#FAF3E0" : "",
                color: language === lang.code ? "#6F4E37" : "",
              }}
            >
              {lang.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#6F4E37] dark:text-[#e6b800]">
          ▼
        </span>
      </div>
    </div>
  );
}
