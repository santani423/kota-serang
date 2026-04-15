"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FileText,
  HandCoins,
  HandFist,
  Mail,
  MessageSquarePlus,
  Send,
  Phone as PhoneIcon,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { postSupport } from "@/lib/services/settingsServices";

export default function Support() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: kirim ke API / email service
    setSubmitted(true);
    setForm({ email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="group w-14 h-14 rounded-2xl bg-[#406A40] shadow-lg hover:scale-110 transition flex items-center justify-center"
            aria-label="Buka bantuan"
          >
            <HandFist className="text-[#37B27D] w-8 h-8" />
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquarePlus className="w-5 h-5 text-[#406A40]" />
              Butuh Bantuan atau Mau Kasih Masukan?
            </DialogTitle>
            <DialogDescription>
              Saya terbuka untuk pertanyaan, saran, atau sekadar ngobrol. Yuk
              hubungi saya 👋
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-1">
            {/* Kontak */}
            <div className="flex flex-col gap-3 border-b pb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#406A40]" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-muted-foreground">
                    Bisa kirim ke:
                  </p>
                  <p className="text-xs text-muted-foreground">
                    santani423@gmail.com
                  </p>
                  <p className="text-xs text-muted-foreground">
                    contact@santani.dev
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-[#406A40]" />
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-xs text-muted-foreground">
                    Chat langsung biar lebih cepat
                  </p>
                  <p className="text-xs text-muted-foreground">
                    0857-7867-4418
                  </p>
                </div>
              </div>

              <a
                href="https://santani.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:bg-muted p-3 rounded-lg transition"
              >
                <FileText className="w-5 h-5 text-[#406A40]" />
                <div>
                  <p className="text-sm font-medium">Lihat Portfolio</p>
                  <p className="text-xs text-muted-foreground">
                    Intip karya dan project yang sudah saya buat
                  </p>
                </div>
              </a>

              <a
                href="https://saweria.co/santani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full cursor-pointer bg-[#406A40] hover:bg-[#325232] text-white">
                  <HandCoins className="w-4 h-4 mr-2" />
                  Traktir Kopi ☕
                </Button>
              </a>
            </div>

            {/* Form */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-[#406A40]">
                Punya Saran?
              </h4>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3 px-1">
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email kamu (boleh dikosongkan)"
                    className="text-sm"
                  />

                  <Input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Nomor HP / WhatsApp (opsional)"
                    className="text-sm"
                  />

                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tulis saran, kritik, atau pesan kamu di sini ya..."
                    className="min-h-[100px] text-sm"
                    required
                  />

                  <Button
                    onClick={async () => {
                      try {
                        await postSupport({
                          email: form.email,
                          hp: form.phone,
                          message: form.message,
                        });
                        // TODO: tampilkan notifikasi sukses ke user
                        console.log("Pesan berhasil dikirim");
                      } catch (err) {
                        // TODO: tampilkan notifikasi error ke user
                        console.error("Gagal mengirim data:", err);
                        alert("Gagal mengirim pesan. Silakan coba lagi.");
                      }
                    }}
                    className="w-full cursor-pointer bg-[#406A40] hover:bg-[#325232] text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              ) : (
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                    Makasih banyak! 🙌 Pesan kamu sudah saya terima.
                  </p>
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" className="text-xs">
                Tutup
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
