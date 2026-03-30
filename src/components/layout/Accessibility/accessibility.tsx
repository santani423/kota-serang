"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Accessibility,
  Volume2,
  AudioLines,
  Sun,
  SwatchBook,
  FileText,
  Link,
  MousePointer2,
  SquareStop,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type FontSize = "sm" | "md" | "lg" | "xl";

export default function AccessibilityComponent() {
  const [settings, setSettings] = useState({
    highContrast: false,
    grayscale: false,
    dyslexia: false,
    reduceMotion: false,
    largeCursor: false,
    highlightLinks: false,
    ttsActive: false,
    fontSize: "md" as FontSize,
  });

  // APPLY CLASS KE HTML
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("contrast-150", settings.highContrast);
    root.classList.toggle("grayscale", settings.grayscale);
    root.classList.toggle("motion-reduce", settings.reduceMotion);
    root.classList.toggle("cursor-large", settings.largeCursor);
    root.classList.toggle("dyslexia-font", settings.dyslexia);
    root.classList.toggle("highlight-links", settings.highlightLinks);

    root.classList.remove("text-sm", "text-base", "text-lg", "text-xl");

    const sizeMap = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    };

    root.classList.add(sizeMap[settings.fontSize]);

    localStorage.setItem("a11y-settings", JSON.stringify(settings));
  }, [settings]);

  // LOAD STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("a11y-settings");
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  const onToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const onFontSize = (size: FontSize) => {
    setSettings((prev) => ({ ...prev, fontSize: size }));
  };

  const onTTS = () => {
    const text = document.body.innerText;

    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.cancel();

    if (!settings.ttsActive) {
      speechSynthesis.speak(utterance);
    }

    setSettings((prev) => ({
      ...prev,
      ttsActive: !prev.ttsActive,
    }));
  };

  const fontSizes = [
    { key: "sm", label: "A-" },
    { key: "md", label: "A" },
    { key: "lg", label: "A+" },
    { key: "xl", label: "A++" },
  ];

  const resetAll = () => {
    const defaultState = {
      highContrast: false,
      grayscale: false,
      dyslexia: false,
      reduceMotion: false,
      largeCursor: false,
      highlightLinks: false,
      ttsActive: false,
      fontSize: "md" as FontSize,
    };

    setSettings(defaultState);
    localStorage.removeItem("a11y-settings");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <button className="group w-14 h-14 rounded-2xl bg-[#406A40] shadow-lg hover:scale-110 transition flex items-center justify-center">
            <Accessibility className="text-[#37B27D] w-8 h-8" />
          </button>
        </SheetTrigger>

        <SheetContent className="bg-white dark:bg-black text-black dark:text-white border-none w-[85%] sm:w-[400px] flex flex-col h-full">
          <SheetHeader>
            <SheetTitle className="font-bold text-lg">Aksesibilitas</SheetTitle>
            <SheetDescription>
              <span className="text-xs text-muted mt-0.5">
                Sesuaikan tampilan untuk kenyamanan Anda
              </span>
            </SheetDescription>
          </SheetHeader>
          <div className="-my-2">
            <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Konten scrollable */}
          <div className="p-5 space-y-6 flex-1 overflow-y-auto">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
              Pendengaran
            </h3>
            {/* TTS */}
            <div
              onClick={onTTS}
              role="button"
              tabIndex={0}
              className={`group flex items-center gap-3 w-full p-4 rounded-xl border transition-all duration-200 cursor-pointer relative
    ${
      settings.ttsActive
        ? "bg-[#37B27D]/5 border-[#37B27D]"
        : "border-gray-300 hover:border-[#1E3A8A]"
    }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl 
                ${
                  settings.ttsActive ? "bg-[#37B27D]" : "bg-gray-100 "
                } group-hover:scale-110 transition flex items-center justify-center`}
              >
                <Volume2
                  className={` ${
                    settings.ttsActive ? "text-white" : "text-black "
                  } w-6 h-6 `}
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <span className="font-bold block">
                  {settings.ttsActive ? "Stop Membaca" : "Baca Halaman"}
                </span>
                <p className="text-sm text-gray-500">Klik untuk mendengarkan</p>
              </div>

              {/* Indicator */}
              {settings.ttsActive && (
                <AudioLines className="text-[#37B27D] w-6 h-6 absolute right-4" />
              )}
            </div>

            {/* FONT SIZE */}
            <div className="space-y-2">
              {/* Label */}
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                Ukuran Teks
              </h3>

              {/* Options */}
              <div className="grid grid-cols-4 gap-2">
                {fontSizes.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => onFontSize(key as FontSize)}
                    className={`py-2 rounded text-lg font-medium transition
          ${
            settings.fontSize === key
              ? "bg-[#1E3A8A] text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            {/* TOGGLES */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                Pengaturan Visual
              </h3>
              {[
                {
                  key: "highContrast",
                  label: "Kontras Tinggi",
                  icon: <Sun className="text-black w-6 h-6" />,
                  desc: "Meningkatkan kontras warna untuk visibilitas.",
                },
                {
                  key: "grayscale",
                  label: "Grayscale",
                  icon: <SwatchBook className="text-black w-6 h-6" />,
                  desc: "Ubah tampilan menjadi hitam putih.",
                },
                {
                  key: "dyslexia",
                  label: "Mode Disleksia",
                  icon: <FileText className="text-black w-6 h-6" />,
                  desc: "Gunakan font ramah disleksia.",
                },
                {
                  key: "reduceMotion",
                  label: "Kurangi Animasi",
                  icon: <SquareStop className="text-black w-6 h-6" />,
                  desc: "Minimalkan animasi/transisi.",
                },
                {
                  key: "largeCursor",
                  label: "Kursor Besar",
                  icon: <MousePointer2 className="text-black w-6 h-6" />,
                  desc: "Perbesar ukuran kursor.",
                },
                {
                  key: "highlightLinks",
                  label: "Sorot Link",
                  icon: <Link className="text-black w-6 h-6" />,
                  desc: "Sorot semua tautan di halaman.",
                },
              ].map(({ key, label, icon, desc }) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-[#1E3A8A] transition"
                >
                  {/* Left Section */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                      {icon}
                    </div>
                    <div>
                      <Label
                        htmlFor={key}
                        className="cursor-pointer font-medium"
                      >
                        {label}
                      </Label>
                      <div className="text-xs text-gray-400 leading-tight">
                        {desc}
                      </div>
                    </div>
                  </div>
                  {/* Switch dengan label aksesibilitas */}
                  <div className="flex items-center gap-2">
                    <Switch
                      id={key}
                      aria-label={label}
                      checked={
                        settings[key as keyof typeof settings] as boolean
                      }
                      onCheckedChange={() =>
                        onToggle(key as keyof typeof settings)
                      }
                      className={
                        settings[key as keyof typeof settings]
                          ? "data-[state=checked]:bg-[#37B27D] border-[#37B27D]"
                          : ""
                      }
                    />
                    <span
                      className={`text-xs font-semibold ${
                        settings[key as keyof typeof settings]
                          ? "text-green-600"
                          : "text-gray-400"
                      }`}
                    >
                      {settings[key as keyof typeof settings] ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Footer Sheet */}
          <SheetFooter>
            <Button onClick={resetAll}>Reset Settingan</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
