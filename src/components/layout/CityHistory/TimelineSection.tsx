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
    description: 'Maulana Hasanuddin, putra Sunan Gunung Jati, mendirikan Kesultanan Banten yang segera berkembang menjadi pusat perdagangan dan penyebaran Islam terbesar di Nusantara bagian barat.',
    era: 'kesultanan',
    eraLabel: 'Era Kesultanan',
  },
  {
    year: '1552',
    title: 'Puncak Kejayaan Banten',
    description: 'Banten menjadi pelabuhan internasional yang ramai dikunjungi pedagang dari Arab, Cina, India, dan Eropa. Kota ini menjadi pusat peradaban Islam yang berpengaruh di Asia Tenggara.',
    era: 'kesultanan',
    eraLabel: 'Era Kesultanan',
  },
  {
    year: '1601',
    title: 'Kontak dengan VOC Belanda',
    description: 'Kapal-kapal VOC Belanda pertama kali berlabuh di Banten. Dimulailah persaingan dagang yang kelak berujung pada konflik berkepanjangan antara Kesultanan Banten dan penjajah Belanda.',
    era: 'kolonial',
    eraLabel: 'Era Kolonial',
  },
  {
    year: '1684',
    title: 'Banten di Bawah Pengaruh VOC',
    description: 'Setelah konflik internal dan tekanan VOC, Kesultanan Banten mulai kehilangan kedaulatannya. Belanda semakin memperkuat cengkeramannya atas wilayah Banten dan jalur perdagangannya.',
    era: 'kolonial',
    eraLabel: 'Era Kolonial',
  },
  {
    year: '1813',
    title: 'Pembentukan Karesidenan Banten',
    description: 'Pemerintah kolonial Belanda membentuk Karesidenan Banten dengan Serang sebagai pusat administrasi. Infrastruktur kolonial mulai dibangun di kota ini.',
    era: 'kolonial',
    eraLabel: 'Era Kolonial',
  },
  {
    year: '1926',
    title: 'Pemberontakan Banten',
    description: 'Rakyat Banten bangkit melawan penjajahan Belanda dalam pemberontakan yang mencerminkan semangat perlawanan dan keberanian warga Serang dalam mempertahankan hak-haknya.',
    era: 'kolonial',
    eraLabel: 'Era Kolonial',
  },
  {
    year: '1945',
    title: 'Proklamasi Kemerdekaan',
    description: 'Seiring kemerdekaan Indonesia, Serang menjadi bagian dari Provinsi Jawa Barat. Rakyat Serang turut berjuang mempertahankan kemerdekaan dari upaya penjajahan kembali oleh Belanda.',
    era: 'modern',
    eraLabel: 'Era Modern',
  },
  {
    year: '1999',
    title: 'Serang: Kota & Ibu Kota Provinsi',
    description: 'Bersamaan dengan pembentukan Provinsi Banten, Serang ditetapkan sebagai ibu kota provinsi sekaligus menjadi kota otonom mandiri yang terus berkembang menjadi pusat pemerintahan dan ekonomi modern.',
    era: 'modern',
    eraLabel: 'Era Modern',
  },
];

const eraColors = {
  kesultanan: { bg: '#1E3A8A', light: '#EFF6FF', text: '#1E3A8A', label: 'Era Kesultanan' },
  kolonial: { bg: '#92400E', light: '#FEF3C7', text: '#92400E', label: 'Era Kolonial' },
  modern: { bg: '#10B981', light: '#ECFDF5', text: '#059669', label: 'Era Modern' },
};

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el, i) => {
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
    <section ref={sectionRef} className="section-padding bg-serang-bg" aria-labelledby="timeline-heading">
      <div className="container-serang">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="badge badge-primary mb-4">Linimasa Sejarah</span>
          <h2 id="timeline-heading" className="font-display h2-display text-serang-foreground mb-5">
            Perjalanan Waktu{' '}
            <span className="gradient-text-warm">Kota Serang</span>
          </h2>
          <p className="body-lg text-serang-muted font-body max-w-2xl mx-auto">
            Dari abad ke-16 hingga hari ini, setiap era meninggalkan jejak yang membentuk identitas Kota Serang.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #1E3A8A, #3B82F6, #92400E, #D97706, #10B981)' }} />

          <div className="flex flex-col gap-12 md:gap-16">
            {timelineEvents.map((event, i) => {
              const colors = eraColors[event.era];
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isLeft ? 'reveal-left' : 'reveal-right'
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Left content (even) or spacer (odd) */}
                  <div className={`flex-1 md:pr-12 ${isLeft ? 'md:text-right' : 'md:order-3 md:pl-12 md:pr-0'}`}>
                    {isLeft ? (
                      <TimelineCard event={event} colors={colors} align="right" />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                    {!isLeft && (
                      <div className="md:hidden">
                        <TimelineCard event={event} colors={colors} align="left" />
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex-shrink-0 hidden md:flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-extrabold text-sm text-white shadow-medium"
                      style={{ background: colors.bg }}>
                      {event.year.slice(0, 2)}<br />{event.year.slice(2)}
                    </div>
                  </div>

                  {/* Right content (odd) or spacer (even) */}
                  <div className={`flex-1 md:pl-12 ${!isLeft ? 'md:text-left' : 'md:order-3 md:pl-12'}`}>
                    {!isLeft ? (
                      <div className="hidden md:block">
                        <TimelineCard event={event} colors={colors} align="left" />
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                    {isLeft && (
                      <div className="md:hidden">
                        <TimelineCard event={event} colors={colors} align="left" />
                      </div>
                    )}
                  </div>

                  {/* Mobile: year badge */}
                  <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xs text-white absolute -left-2 top-0"
                    style={{ background: colors.bg }}>
                    {event.year}
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

function TimelineCard({ event, colors, align }: {
  event: TimelineEvent;
  colors: { bg: string; light: string; text: string; label: string };
  align: 'left' | 'right';
}) {
  return (
    <div className={`group relative bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-serang-border ${
      align === 'right' ? 'md:ml-auto' : ''
    }`} style={{ maxWidth: '420px' }}>
      {/* Era badge */}
      <span className="badge text-xs mb-3 inline-flex" style={{ background: `${colors.bg}15`, color: colors.text, border: `1px solid ${colors.bg}25` }}>
        {event.eraLabel}
      </span>
      {/* Year */}
      <div className="font-display font-extrabold mb-2" style={{ fontSize: '2rem', lineHeight: 1, color: colors.bg, letterSpacing: '-0.04em' }}>
        {event.year}
      </div>
      {/* Title */}
      <h3 className="font-display font-bold text-serang-foreground text-base mb-3 leading-snug">{event.title}</h3>
      {/* Description */}
      <p className="font-body text-serang-muted text-sm leading-relaxed">{event.description}</p>

      {/* Accent bottom */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, transparent, ${colors.bg}60, transparent)` }} />
    </div>
  );
}