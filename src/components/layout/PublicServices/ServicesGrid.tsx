'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  IdCard,
  Home,
  Building2,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Banknote,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle,
  ArrowRightCircle,
  Plus,
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  desc: string;
  duration: string;
  requirements: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  popular?: boolean;
}

const allServices: ServiceDetail[] = [
  {
    id: 'ktp',
    icon: IdCard,
    title: 'Pembuatan KTP Elektronik',
    category: 'Kependudukan',
    desc: 'Penerbitan KTP-el baru, penggantian, dan pembaruan data kependudukan.',
    duration: '1-3 Hari Kerja',
    requirements: ['Kartu Keluarga', 'Akta Lahir', 'Surat Pengantar RT/RW'],
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-100 dark:border-blue-900/30',
    popular: true,
  },
  {
    id: 'kk',
    icon: Home,
    title: 'Kartu Keluarga',
    category: 'Kependudukan',
    desc: 'Penerbitan, perubahan, dan penggantian Kartu Keluarga.',
    duration: '2-3 Hari Kerja',
    requirements: ['KTP Kepala Keluarga', 'Akta Nikah', 'Surat Domisili'],
    color: 'text-accent-dark dark:text-accent-light',
    bgColor: 'bg-accent-50 dark:bg-accent/10',
    borderColor: 'border-accent-100 dark:border-accent/20',
  },
  {
    id: 'imb',
    icon: Building2,
    title: 'Izin Mendirikan Bangunan',
    category: 'Perizinan',
    desc: 'Pengajuan IMB untuk bangunan baru, renovasi, dan perluasan.',
    duration: '7-14 Hari Kerja',
    requirements: ['Sertifikat Tanah', 'Gambar Teknis', 'KTP Pemohon', 'NPWP'],
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-100 dark:border-amber-900/30',
    popular: true,
  },
  {
    id: 'siup',
    icon: Briefcase,
    title: 'SIUP & NIB Usaha',
    category: 'Perizinan',
    desc: 'Surat Izin Usaha Perdagangan dan Nomor Induk Berusaha.',
    duration: '3-5 Hari Kerja',
    requirements: ['KTP', 'NPWP', 'Akta Pendirian'],
    color: 'text-violet-600 dark:text-violet-400',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    borderColor: 'border-violet-100 dark:border-violet-900/30',
  },
  {
    id: 'puskesmas',
    icon: HeartPulse,
    title: 'Antrian Puskesmas Online',
    category: 'Kesehatan',
    desc: 'Daftar antrian Puskesmas dari rumah.',
    duration: 'Sesuai Jadwal',
    requirements: ['KTP / KK'],
    color: 'text-rose-600 dark:text-rose-400',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    borderColor: 'border-rose-100 dark:border-rose-900/30',
    popular: true,
  },
  {
    id: 'ppdb',
    icon: GraduationCap,
    title: 'PPDB Online',
    category: 'Pendidikan',
    desc: 'Penerimaan Peserta Didik Baru.',
    duration: 'Sesuai Jadwal',
    requirements: ['Akta Lahir', 'KK'],
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    borderColor: 'border-cyan-100 dark:border-cyan-900/30',
  },
  {
    id: 'pajak',
    icon: Banknote,
    title: 'Pembayaran PBB Online',
    category: 'Keuangan',
    desc: 'Bayar Pajak Bumi dan Bangunan.',
    duration: 'Instan',
    requirements: ['SPPT PBB'],
    color: 'text-primary-700 dark:text-primary-light',
    bgColor: 'bg-primary-50 dark:bg-primary-900/20',
    borderColor: 'border-primary-100 dark:border-primary-900/30',
  },
  {
    id: 'laporan',
    icon: AlertTriangle,
    title: 'Laporan Infrastruktur',
    category: 'Pengaduan',
    desc: 'Laporkan kerusakan fasilitas umum.',
    duration: '1-7 Hari Kerja',
    requirements: ['Foto', 'Lokasi'],
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-100 dark:border-orange-900/30',
  },
];

const categories = ['Semua', 'Kependudukan', 'Perizinan', 'Kesehatan', 'Pendidikan', 'Keuangan', 'Pengaduan'];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) =>
              el.classList.add('active')
            );
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === 'Semua'
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-serang-bg dark:bg-[#0A1628]"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                activeCategory === cat
                  ? 'bg-primary-700 text-white'
                  : 'bg-white dark:bg-[#162032] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() =>
                  setExpandedId(
                    expandedId === service.id ? null : service.id
                  )
                }
                className={`cursor-pointer rounded-2xl border ${service.borderColor} bg-white dark:bg-[#162032]`}
              >
                <div className="p-5 flex flex-col gap-3">

                  <div className="flex justify-between">
                    <div className={`w-11 h-11 flex items-center justify-center rounded-xl ${service.bgColor}`}>
                      <Icon className={service.color} size={20} />
                    </div>

                    {expandedId === service.id ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>

                  <h3 className="text-sm font-semibold dark:text-white">
                    {service.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={12} />
                    {service.duration}
                  </div>
                </div>

                {expandedId === service.id && (
                  <div className="p-5 border-t">
                    <ul className="text-xs space-y-2">
                      {service.requirements.map((r) => (
                        <li key={r} className="flex gap-2">
                          <CheckCircle size={12} />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <button className="mt-4 w-full flex items-center justify-center gap-2 text-xs bg-primary-700 text-white py-2 rounded-xl">
                      <ArrowRightCircle size={14} />
                      Mulai
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="flex items-center gap-2 mx-auto">
            <Plus size={16} />
            Tampilkan Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}