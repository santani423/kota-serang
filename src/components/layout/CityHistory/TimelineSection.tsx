'use client';
import React, { useEffect, useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  era: 'kesultanan' | 'kolonial' | 'modern';
  eraLabel: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1524',
    title: 'Berdirinya Kesultanan Banten',
    description:
      'Maulana Hasanuddin, putra Sunan Gunung Jati, mendirikan Kesultanan Banten yang segera berkembang menjadi pusat perdagangan dan penyebaran Islam terbesar di Nusantara bagian barat.',
    era: 'kesultanan',
    eraLabel: 'Era Kesultanan',
  },
  {
    year: '1552',
    title: 'Puncak Kejayaan Banten',
    description:
      'Banten menjadi pelabuhan internasional yang ramai dikunjungi pedagang dari Arab, Cina, India, dan Eropa.',
    era: 'kesultanan',
    eraLabel: 'Era Kesultanan',
  },
  {
    year: '1601',
    title: 'Kontak dengan VOC Belanda',
    description:
      'Kapal-kapal VOC Belanda pertama kali berlabuh di Banten.',
    era: 'kolonial',
    eraLabel: 'Era Kolonial',
  },
  {
    year: '1684',
    title: 'Banten di Bawah Pengaruh VOC',
    description:
      'Kesultanan Banten mulai kehilangan kedaulatannya.',
    era: 'kolonial',
    eraLabel: 'Era Kolonial',
  },
  {
    year: '1813',
    title: 'Pembentukan Karesidenan Banten',
    description:
      'Serang menjadi pusat administrasi kolonial.',
    era: 'kolonial',
    eraLabel: 'Era Kolonial',
  },
  {
    year: '1926',
    title: 'Pemberontakan Banten',
    description:
      'Perlawanan rakyat terhadap penjajah Belanda.',
    era: 'kolonial',
    eraLabel: 'Era Kolonial',
  },
  {
    year: '1945',
    title: 'Proklamasi Kemerdekaan',
    description:
      'Serang menjadi bagian dari Indonesia merdeka.',
    era: 'modern',
    eraLabel: 'Era Modern',
  },
  {
    year: '1999',
    title: 'Serang sebagai Ibu Kota Banten',
    description:
      'Serang menjadi pusat pemerintahan provinsi.',
    era: 'modern',
    eraLabel: 'Era Modern',
  },
];

const eraColors = {
  kesultanan: { bg: '#1E3A8A', text: '#1E3A8A' },
  kolonial: { bg: '#92400E', text: '#92400E' },
  modern: { bg: '#10B981', text: '#059669' },
};

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-serang-bg">
      <div className="container-serang">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-3xl font-bold mb-4">
            Perjalanan Waktu <span className="text-primary">Kota Serang</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Dari abad ke-16 hingga hari ini
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Center Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-800 via-yellow-600 to-green-500 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              const colors = eraColors[event.era];

              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  } reveal-up`}
                >
                  {/* Card */}
                  <div className="w-full md:w-1/2 flex justify-center md:block px-4">
                    <TimelineCard
                      event={event}
                      colors={colors}
                      align={isLeft ? 'left' : 'right'}
                    />
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ background: colors.bg }}
                    >
                      {event.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  event,
  colors,
  align,
}: {
  event: TimelineEvent;
  colors: { bg: string; text: string };
  align: 'left' | 'right';
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-md border mx-auto md:mx-0 transition-all duration-300 hover:-translate-y-1 ${
        align === 'right' ? 'md:ml-auto' : 'md:mr-auto'
      }`}
      style={{ maxWidth: '420px' }}
    >
      {/* Era */}
      <span
        className="text-xs px-2 py-1 rounded mb-2 inline-block"
        style={{
          background: `${colors.bg}20`,
          color: colors.text,
        }}
      >
        {event.eraLabel}
      </span>

      {/* Year */}
      <div
        className="text-2xl font-bold mb-2"
        style={{ color: colors.bg }}
      >
        {event.year}
      </div>

      {/* Title */}
      <h3 className="font-semibold mb-2">{event.title}</h3>

      {/* Desc */}
      <p className="text-sm text-gray-600">{event.description}</p>
    </div>
  );
}