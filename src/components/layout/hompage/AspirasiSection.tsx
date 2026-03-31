'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Clock,
  ShieldCheck,
  BarChart3,
  CheckCircle,
  Send,
} from 'lucide-react';

export default function AspirasiSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nama: '',
    email: '',
    pesan: '',
    kategori: '',
  });
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.reveal')
              .forEach((el) => el.classList.add('active'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ nama: '', email: '', pesan: '', kategori: '' });
  };

  const inputClass = (field: string) =>
    `w-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border rounded-xl px-4 py-3 text-white placeholder-white/40 outline-none text-sm
    transition-colors duration-200
    ${
      focused === field
        ? 'border-[#1E3A8A] ring-2 ring-[#1E3A8A]/40'
        : 'border-white/20 hover:border-white/40'
    }`;

  return (
    <section
      ref={sectionRef}
      id="aspirasi"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#060f1e]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 40%, rgba(16,185,129,0.3), transparent 60%), radial-gradient(circle at 80% 60%, rgba(30,58,138,0.4), transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="reveal text-white">
          <p className="text-xs tracking-[0.2em] text-emerald-400 mb-4">
            — Suara Warga
          </p>

          <h2 className="text-3xl font-bold mb-6">
            Sampaikan <br />
            <span className="text-emerald-400">Aspirasi Anda</span>
          </h2>

          <p className="text-white/70 mb-10 max-w-md">
            Pemerintah Kota Serang berkomitmen mendengar setiap suara warga.
          </p>

          <div className="flex flex-col gap-5">
            {[
              {
                icon: Clock,
                title: 'Respons 1×24 Jam',
                desc: 'Ditindaklanjuti dalam 24 jam',
              },
              {
                icon: ShieldCheck,
                title: 'Identitas Terlindungi',
                desc: 'Data aman & rahasia',
              },
              {
                icon: BarChart3,
                title: 'Tracking Real-time',
                desc: 'Pantau progres laporan',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1E3A8A]/20 rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-[#1E3A8A]" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="reveal delay-200">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8">
            {submitted ? (
              <div className="text-center text-white flex flex-col items-center gap-4">
                <CheckCircle size={40} className="text-emerald-400" />
                <h3 className="text-xl font-bold">Aspirasi Terkirim!</h3>
                <p className="text-white/60 text-sm">
                  Kami akan menindaklanjuti dalam 1×24 jam.
                </p>

                <button
                  onClick={resetForm}
                  className="mt-4 border-2 border-[#1E3A8A] text-[#1E3A8A] px-6 py-2 rounded-xl hover:bg-[#1E3A8A]/10 transition"
                >
                  Kirim Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">
                <h3 className="text-lg font-bold">Form Aspirasi</h3>

                <input
                  placeholder="Nama"
                  value={form.nama}
                  onChange={(e) =>
                    setForm({ ...form, nama: e.target.value })
                  }
                  onFocus={() => setFocused('nama')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('nama')}
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('email')}
                />

                <select
                  value={form.kategori}
                  onChange={(e) =>
                    setForm({ ...form, kategori: e.target.value })
                  }
                  onFocus={() => setFocused('kategori')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('kategori')}
                >
                  <option value="">Pilih kategori</option>
                  <option value="infrastruktur">Infrastruktur</option>
                  <option value="layanan">Layanan</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Tulis aspirasi..."
                  value={form.pesan}
                  onChange={(e) =>
                    setForm({ ...form, pesan: e.target.value })
                  }
                  onFocus={() => setFocused('pesan')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('pesan')}
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 py-3 rounded-xl font-medium transition"
                >
                  <Send size={16} />
                  Kirim Aspirasi
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}