'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Popsicle  } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Logo */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h3 className="font-bold text-lg text-[#1E3A8A] dark:text-white">
                  SerangKota
                </h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Kota Serang
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Portal resmi Pemerintah Kota Serang — melayani dengan teknologi.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[
                { icon: Globe, label: 'Website' },
                { icon: Popsicle, label: 'Popsicle' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    aria-label={item.label}
                    className="p-2 rounded-lg text-gray-500 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10 transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            {/* Layanan */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Layanan
              </p>
              <ul className="space-y-3">
                {['Layanan Publik', 'Perizinan', 'Pengaduan', 'Transparansi'].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="/public-services"
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#1E3A8A] transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Informasi */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Informasi
              </p>
              <ul className="space-y-3">
                {[
                  { label: 'Berita', href: '/news' },
                  { label: 'Wisata', href: '/#wisata' },
                  { label: 'Tentang', href: '/' },
                  { label: 'Kontak', href: '/#aspirasi' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#1E3A8A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 Pemerintah Kota Serang
          </p>

          <div className="flex gap-6">
            {['Privasi', 'Ketentuan', 'Aksesibilitas'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-gray-500 hover:text-[#1E3A8A] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;