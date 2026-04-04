"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import Template from "@/components/layout/template";

interface CareerItem {
  year: string;
  role: string;
  institution: string;
}

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
}

interface Achievement {
  icon: string;
  title: string;
  year: string;
}

interface MissionItem {
  text: string;
}

interface LeaderDetail {
  id: number;
  name: string;
  title: string;
  category: string;
  period: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  bio: string;
  vision: string;
  missions: MissionItem[];
  career: CareerItem[];
  education: EducationItem[];
  achievements: Achievement[];
  email: string;
  phone: string;
}

const leadersData: LeaderDetail[] = [
  {
    id: 1,
    name: "H. Syafrudin, S.Sos., M.Si.",
    title: "Wali Kota Serang",
    category: "Eksekutif",
    period: "2024–2029",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1651cfc0b-1763295052209.png",
    imageAlt:
      "Potret pria profesional berpakaian formal jas hitam dengan ekspresi percaya diri",
    featured: true,
    bio: "H. Syafrudin, S.Sos., M.Si. adalah pemimpin berpengalaman yang telah mengabdikan dirinya untuk kemajuan Kota Serang selama lebih dari dua dekade. Dengan latar belakang ilmu sosial dan administrasi publik, beliau berkomitmen untuk mewujudkan tata kelola pemerintahan yang transparan, akuntabel, dan berorientasi pada pelayanan masyarakat.",
    vision:
      "Terwujudnya Kota Serang yang Maju, Sejahtera, dan Berkeadaban melalui Tata Kelola Pemerintahan yang Bersih dan Inovatif pada Tahun 2029.",
    missions: [
      {
        text: "Meningkatkan kualitas pelayanan publik berbasis teknologi digital yang mudah diakses seluruh lapisan masyarakat.",
      },
      {
        text: "Memperkuat perekonomian daerah melalui pengembangan UMKM, investasi, dan pariwisata lokal.",
      },
      {
        text: "Membangun infrastruktur kota yang modern, berkelanjutan, dan ramah lingkungan.",
      },
      {
        text: "Meningkatkan kualitas pendidikan dan kesehatan masyarakat secara merata dan berkeadilan.",
      },
      {
        text: "Mewujudkan tata kelola pemerintahan yang bersih, transparan, dan akuntabel.",
      },
    ],

    career: [
      {
        year: "2024–Kini",
        role: "Wali Kota Serang",
        institution: "Pemerintah Kota Serang",
      },
      {
        year: "2019–2024",
        role: "Wakil Wali Kota Serang",
        institution: "Pemerintah Kota Serang",
      },
      {
        year: "2015–2019",
        role: "Anggota DPRD Kota Serang",
        institution: "DPRD Kota Serang",
      },
      {
        year: "2010–2015",
        role: "Kepala Bagian Pemerintahan",
        institution: "Setda Kota Serang",
      },
      {
        year: "2005–2010",
        role: "Camat Serang",
        institution: "Kecamatan Serang",
      },
    ],

    education: [
      {
        year: "2008",
        degree: "Magister Ilmu Administrasi (M.Si.)",
        institution: "Universitas Indonesia",
      },
      {
        year: "2000",
        degree: "Sarjana Ilmu Sosial (S.Sos.)",
        institution: "Universitas Sultan Ageng Tirtayasa",
      },
    ],

    achievements: [
      {
        icon: "🏆",
        title: "Penghargaan Inovasi Pelayanan Publik Terbaik",
        year: "2023",
      },
      { icon: "⭐", title: "Tokoh Inspiratif Banten", year: "2022" },
      { icon: "🎖️", title: "Satya Lencana Karya Satya 20 Tahun", year: "2021" },
      { icon: "🌟", title: "Pemimpin Daerah Terbaik Nasional", year: "2020" },
    ],

    email: "walikota@serangkota.go.id",
    phone: "(0254) 200-001",
  },
  {
    id: 2,
    name: "Hj. Rahma Kusumawati, S.H.",
    title: "Wakil Wali Kota Serang",
    category: "Eksekutif",
    period: "2024–2029",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1e3dcc45f-1772203448327.png",
    imageAlt:
      "Potret wanita profesional berpakaian formal dengan senyum ramah dan ekspresi percaya diri",
    featured: true,
    bio: "Hj. Rahma Kusumawati, S.H. adalah sosok pemimpin perempuan yang inspiratif dengan rekam jejak panjang di bidang hukum dan pemerintahan. Beliau dikenal sebagai advokat hak-hak masyarakat dan pendorong kebijakan yang berpihak pada kelompok rentan, perempuan, dan anak-anak.",
    vision:
      "Mewujudkan Kota Serang yang Inklusif, Berkeadilan, dan Berdaya Saing dengan Mengutamakan Kesejahteraan Seluruh Warga Kota.",
    missions: [
      {
        text: "Mendorong pemberdayaan perempuan dan perlindungan anak dalam setiap aspek kebijakan daerah.",
      },
      {
        text: "Meningkatkan akses layanan hukum dan keadilan bagi seluruh lapisan masyarakat.",
      },
      {
        text: "Mengembangkan program sosial yang tepat sasaran untuk mengurangi kemiskinan.",
      },
      {
        text: "Membangun kemitraan strategis dengan sektor swasta dan masyarakat sipil.",
      },
      {
        text: "Mendorong partisipasi aktif masyarakat dalam proses pembangunan daerah.",
      },
    ],

    career: [
      {
        year: "2024–Kini",
        role: "Wakil Wali Kota Serang",
        institution: "Pemerintah Kota Serang",
      },
      {
        year: "2019–2024",
        role: "Anggota DPRD Provinsi Banten",
        institution: "DPRD Provinsi Banten",
      },
      {
        year: "2014–2019",
        role: "Advokat Senior",
        institution: "Kantor Hukum Kusumawati & Partners",
      },
      {
        year: "2010–2014",
        role: "Kepala Bidang Hukum",
        institution: "Pemkot Serang",
      },
    ],

    education: [
      {
        year: "2005",
        degree: "Sarjana Hukum (S.H.)",
        institution: "Universitas Padjadjaran",
      },
    ],

    achievements: [
      {
        icon: "🏆",
        title: "Perempuan Berprestasi Provinsi Banten",
        year: "2023",
      },
      {
        icon: "⭐",
        title: "Penghargaan Perlindungan Anak Terbaik",
        year: "2022",
      },
      { icon: "🎖️", title: "Tokoh Hukum Inspiratif Nasional", year: "2021" },
    ],

    email: "wakilwalikota@serangkota.go.id",
    phone: "(0254) 200-002",
  },
  {
    id: 3,
    name: "Drs. Ahmad Fauzi, M.M.",
    title: "Sekretaris Daerah",
    category: "Sekretariat",
    period: "Sejak 2023",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_194504bae-1763295050465.png",
    imageAlt:
      "Potret pria paruh baya berpakaian formal jas abu-abu dengan ekspresi serius dan profesional",
    featured: false,
    bio: "Drs. Ahmad Fauzi, M.M. adalah birokrat senior dengan pengalaman lebih dari 25 tahun di lingkungan pemerintahan. Sebagai Sekretaris Daerah, beliau berperan sebagai koordinator utama seluruh perangkat daerah dalam mewujudkan program pembangunan kota.",
    vision:
      "Terwujudnya Birokrasi Kota Serang yang Profesional, Efisien, dan Berorientasi pada Hasil untuk Mendukung Pembangunan Daerah.",
    missions: [
      {
        text: "Mengoptimalkan koordinasi antar perangkat daerah untuk efektivitas pelaksanaan program.",
      },
      {
        text: "Meningkatkan kapasitas dan kompetensi aparatur sipil negara di lingkungan Pemkot Serang.",
      },
      {
        text: "Mendorong reformasi birokrasi menuju pemerintahan yang bersih dan melayani.",
      },
      {
        text: "Memastikan pengelolaan keuangan daerah yang transparan dan akuntabel.",
      },
    ],

    career: [
      {
        year: "2023–Kini",
        role: "Sekretaris Daerah",
        institution: "Pemerintah Kota Serang",
      },
      {
        year: "2018–2023",
        role: "Asisten Administrasi Umum",
        institution: "Setda Kota Serang",
      },
      {
        year: "2013–2018",
        role: "Kepala Dinas Administrasi",
        institution: "Pemkot Serang",
      },
      {
        year: "2008–2013",
        role: "Kepala Bagian Organisasi",
        institution: "Setda Kota Serang",
      },
    ],

    education: [
      {
        year: "2010",
        degree: "Magister Manajemen (M.M.)",
        institution: "Universitas Gadjah Mada",
      },
      {
        year: "1995",
        degree: "Sarjana Administrasi (Drs.)",
        institution: "STIA LAN Jakarta",
      },
    ],

    achievements: [
      { icon: "🏆", title: "ASN Berprestasi Tingkat Nasional", year: "2022" },
      { icon: "🎖️", title: "Satya Lencana Karya Satya 30 Tahun", year: "2023" },
    ],

    email: "sekda@serangkota.go.id",
    phone: "(0254) 200-003",
  },
  {
    id: 4,
    name: "Ir. Budi Santoso, M.T.",
    title: "Kepala Dinas Pekerjaan Umum",
    category: "Dinas",
    period: "Sejak 2022",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1cf01c511-1763293461836.png",
    imageAlt:
      "Potret pria berambut pendek dengan senyum profesional mengenakan kemeja putih",
    featured: false,
    bio: "Ir. Budi Santoso, M.T. adalah insinyur berpengalaman yang memimpin pembangunan infrastruktur Kota Serang. Dengan keahlian teknis yang mendalam, beliau berkomitmen untuk membangun kota yang modern, berkelanjutan, dan nyaman bagi seluruh warga.",
    vision:
      "Terwujudnya Infrastruktur Kota Serang yang Modern, Berkelanjutan, dan Berkeadilan untuk Mendukung Pertumbuhan Ekonomi dan Kesejahteraan Masyarakat.",
    missions: [
      {
        text: "Membangun dan memelihara jaringan jalan kota yang berkualitas dan merata.",
      },
      {
        text: "Mengembangkan sistem drainase dan pengelolaan air bersih yang handal.",
      },
      {
        text: "Mendorong pembangunan infrastruktur ramah lingkungan dan berkelanjutan.",
      },
      {
        text: "Meningkatkan kualitas ruang publik dan taman kota untuk kenyamanan warga.",
      },
    ],

    career: [
      {
        year: "2022–Kini",
        role: "Kepala Dinas Pekerjaan Umum",
        institution: "Pemkot Serang",
      },
      {
        year: "2017–2022",
        role: "Kepala Bidang Bina Marga",
        institution: "Dinas PU Kota Serang",
      },
      {
        year: "2012–2017",
        role: "Kepala Seksi Pembangunan Jalan",
        institution: "Dinas PU Kota Serang",
      },
    ],

    education: [
      {
        year: "2005",
        degree: "Magister Teknik Sipil (M.T.)",
        institution: "Institut Teknologi Bandung",
      },
      {
        year: "2000",
        degree: "Sarjana Teknik Sipil (Ir.)",
        institution: "Universitas Diponegoro",
      },
    ],

    achievements: [
      {
        icon: "🏆",
        title: "Penghargaan Infrastruktur Terbaik Banten",
        year: "2023",
      },
      { icon: "⭐", title: "Inovasi Pembangunan Berkelanjutan", year: "2022" },
    ],

    email: "pu@serangkota.go.id",
    phone: "(0254) 200-004",
  },
  {
    id: 5,
    name: "dr. Siti Nurjanah, Sp.A.",
    title: "Kepala Dinas Kesehatan",
    category: "Dinas",
    period: "Sejak 2023",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_19e1eec73-1772087973666.png",
    imageAlt:
      "Potret wanita dokter berjas putih dengan ekspresi hangat dan profesional",
    featured: false,
    bio: "dr. Siti Nurjanah, Sp.A. adalah dokter spesialis anak yang berdedikasi tinggi dalam meningkatkan derajat kesehatan masyarakat Kota Serang. Dengan pendekatan preventif dan promotif, beliau memimpin transformasi layanan kesehatan yang lebih merata dan berkualitas.",
    vision:
      "Terwujudnya Masyarakat Kota Serang yang Sehat, Mandiri, dan Berkeadilan melalui Pelayanan Kesehatan yang Berkualitas dan Merata.",
    missions: [
      {
        text: "Meningkatkan akses dan kualitas layanan kesehatan dasar di seluruh wilayah kota.",
      },
      {
        text: "Menurunkan angka kematian ibu dan bayi melalui program kesehatan ibu dan anak.",
      },
      { text: "Mendorong perilaku hidup bersih dan sehat di masyarakat." },
      {
        text: "Memperkuat sistem surveilans dan penanggulangan penyakit menular.",
      },
    ],

    career: [
      {
        year: "2023–Kini",
        role: "Kepala Dinas Kesehatan",
        institution: "Pemkot Serang",
      },
      {
        year: "2018–2023",
        role: "Dokter Spesialis Anak",
        institution: "RSUD Kota Serang",
      },
      {
        year: "2013–2018",
        role: "Kepala Puskesmas Serang Kota",
        institution: "Dinkes Kota Serang",
      },
    ],

    education: [
      {
        year: "2012",
        degree: "Spesialis Anak (Sp.A.)",
        institution: "Universitas Indonesia",
      },
      {
        year: "2006",
        degree: "Dokter Umum (dr.)",
        institution: "Universitas Padjadjaran",
      },
    ],

    achievements: [
      { icon: "🏆", title: "Dokter Teladan Provinsi Banten", year: "2022" },
      {
        icon: "⭐",
        title: "Penghargaan Kesehatan Ibu & Anak Terbaik",
        year: "2023",
      },
    ],

    email: "dinkes@serangkota.go.id",
    phone: "(0254) 200-005",
  },
  {
    id: 6,
    name: "H. Ridwan Kamali, S.E., M.M.",
    title: "Kepala Dinas Koperasi & UMKM",
    category: "Dinas",
    period: "Sejak 2021",
    image: "https://images.unsplash.com/photo-1726440464439-81579d883f5e",
    imageAlt:
      "Potret pria tersenyum percaya diri dengan kemeja biru formal dan latar belakang netral",
    featured: false,
    bio: "H. Ridwan Kamali, S.E., M.M. adalah ekonom yang berpengalaman dalam pengembangan usaha mikro, kecil, dan menengah. Beliau berkomitmen untuk memberdayakan pelaku UMKM lokal agar mampu bersaing di era digital dan pasar global.",
    vision:
      "Terwujudnya Ekosistem UMKM Kota Serang yang Berdaya Saing, Inovatif, dan Berkelanjutan untuk Mendorong Pertumbuhan Ekonomi Inklusif.",
    missions: [
      {
        text: "Meningkatkan kapasitas dan kompetensi pelaku UMKM melalui pelatihan dan pendampingan.",
      },
      { text: "Mendorong digitalisasi UMKM untuk memperluas akses pasar." },
      {
        text: "Memfasilitasi akses permodalan bagi UMKM melalui kemitraan dengan lembaga keuangan.",
      },
      {
        text: "Mengembangkan koperasi sebagai pilar ekonomi kerakyatan yang kuat.",
      },
    ],

    career: [
      {
        year: "2021–Kini",
        role: "Kepala Dinas Koperasi & UMKM",
        institution: "Pemkot Serang",
      },
      {
        year: "2016–2021",
        role: "Kepala Bidang Pengembangan UMKM",
        institution: "Dinas Koperasi Kota Serang",
      },
      {
        year: "2011–2016",
        role: "Konsultan Pengembangan Bisnis",
        institution: "Swasta",
      },
    ],

    education: [
      {
        year: "2008",
        degree: "Magister Manajemen (M.M.)",
        institution: "Universitas Trisakti",
      },
      {
        year: "2003",
        degree: "Sarjana Ekonomi (S.E.)",
        institution: "Universitas Sultan Ageng Tirtayasa",
      },
    ],

    achievements: [
      {
        icon: "🏆",
        title: "Penghargaan Pengembangan UMKM Terbaik",
        year: "2023",
      },
      { icon: "⭐", title: "Inovasi Digitalisasi UMKM Banten", year: "2022" },
    ],

    email: "diskopumkm@serangkota.go.id",
    phone: "(0254) 200-006",
  },
  {
    id: 7,
    name: "Dra. Lestari Wulandari, M.Pd.",
    title: "Kepala Dinas Pendidikan",
    category: "Dinas",
    period: "Sejak 2022",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1ee2bcef3-1763301295581.png",
    imageAlt:
      "Potret wanita profesional berambut pendek dengan ekspresi ceria dan pakaian formal",
    featured: false,
    bio: "Dra. Lestari Wulandari, M.Pd. adalah pendidik berpengalaman yang berdedikasi untuk meningkatkan kualitas pendidikan di Kota Serang. Dengan visi pendidikan yang inklusif dan inovatif, beliau memimpin transformasi sistem pendidikan yang berorientasi pada karakter dan kompetensi.",
    vision:
      "Terwujudnya Pendidikan Kota Serang yang Berkualitas, Inklusif, dan Berkarakter untuk Mencetak Generasi Unggul dan Berdaya Saing Global.",
    missions: [
      {
        text: "Meningkatkan kualitas dan kompetensi tenaga pendidik melalui program pengembangan profesional.",
      },
      {
        text: "Memastikan akses pendidikan yang merata bagi seluruh anak usia sekolah.",
      },
      { text: "Mengintegrasikan teknologi digital dalam proses pembelajaran." },
      { text: "Memperkuat pendidikan karakter dan nilai-nilai kebangsaan." },
    ],

    career: [
      {
        year: "2022–Kini",
        role: "Kepala Dinas Pendidikan",
        institution: "Pemkot Serang",
      },
      {
        year: "2017–2022",
        role: "Kepala Bidang Pembinaan SD",
        institution: "Dinas Pendidikan Kota Serang",
      },
      {
        year: "2010–2017",
        role: "Kepala Sekolah SDN Serang 1",
        institution: "Dinas Pendidikan Kota Serang",
      },
    ],

    education: [
      {
        year: "2009",
        degree: "Magister Pendidikan (M.Pd.)",
        institution: "Universitas Negeri Jakarta",
      },
      {
        year: "1998",
        degree: "Sarjana Pendidikan (Dra.)",
        institution: "IKIP Bandung",
      },
    ],

    achievements: [
      { icon: "🏆", title: "Guru Berprestasi Nasional", year: "2015" },
      {
        icon: "⭐",
        title: "Inovasi Pendidikan Karakter Terbaik",
        year: "2023",
      },
    ],

    email: "disdik@serangkota.go.id",
    phone: "(0254) 200-007",
  },
  {
    id: 8,
    name: "Drs. Hendra Gunawan, M.Si.",
    title: "Kepala Badan Perencanaan Daerah",
    category: "Badan",
    period: "Sejak 2023",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1101e9026-1763296623238.png",
    imageAlt:
      "Potret pria muda profesional berjas gelap dengan senyum percaya diri",
    featured: false,
    bio: "Drs. Hendra Gunawan, M.Si. adalah perencana pembangunan yang visioner dengan keahlian dalam analisis kebijakan dan perencanaan strategis. Beliau memimpin Bappeda dalam menyusun rencana pembangunan daerah yang komprehensif dan berbasis data.",
    vision:
      "Terwujudnya Perencanaan Pembangunan Kota Serang yang Berkualitas, Terintegrasi, dan Berbasis Data untuk Mendukung Pembangunan yang Berkelanjutan.",
    missions: [
      {
        text: "Menyusun dokumen perencanaan pembangunan yang komprehensif dan terukur.",
      },
      {
        text: "Mengembangkan sistem data dan informasi pembangunan yang terintegrasi.",
      },
      {
        text: "Mendorong sinkronisasi perencanaan antara pusat, provinsi, dan daerah.",
      },
      {
        text: "Meningkatkan kualitas evaluasi dan monitoring pelaksanaan program pembangunan.",
      },
    ],

    career: [
      {
        year: "2023–Kini",
        role: "Kepala Badan Perencanaan Daerah",
        institution: "Pemkot Serang",
      },
      {
        year: "2018–2023",
        role: "Kepala Bidang Perencanaan Ekonomi",
        institution: "Bappeda Kota Serang",
      },
      {
        year: "2013–2018",
        role: "Perencana Madya",
        institution: "Bappeda Provinsi Banten",
      },
    ],

    education: [
      {
        year: "2010",
        degree: "Magister Ilmu Perencanaan (M.Si.)",
        institution: "Institut Pertanian Bogor",
      },
      {
        year: "2005",
        degree: "Sarjana Perencanaan Wilayah (Drs.)",
        institution: "Universitas Diponegoro",
      },
    ],

    achievements: [
      {
        icon: "🏆",
        title: "Perencana Pembangunan Terbaik Banten",
        year: "2022",
      },
      { icon: "⭐", title: "Inovasi Perencanaan Berbasis Data", year: "2023" },
    ],

    email: "bappeda@serangkota.go.id",
    phone: "(0254) 200-008",
  },
  {
    id: 9,
    name: "Hj. Nurul Hidayah, S.H., M.H.",
    title: "Kepala Badan Kepegawaian Daerah",
    category: "Badan",
    period: "Sejak 2021",
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1bee6f5b2-1772814263694.png",
    imageAlt:
      "Potret wanita profesional dengan rambut diikat dan pakaian formal berwarna gelap",
    featured: false,
    bio: "Hj. Nurul Hidayah, S.H., M.H. adalah ahli hukum kepegawaian yang berpengalaman dalam manajemen sumber daya manusia aparatur. Beliau memimpin transformasi sistem kepegawaian daerah menuju birokrasi yang profesional dan berbasis merit.",
    vision:
      "Terwujudnya Aparatur Sipil Negara Kota Serang yang Profesional, Kompeten, dan Berintegritas dalam Mendukung Penyelenggaraan Pemerintahan yang Baik.",
    missions: [
      {
        text: "Menerapkan sistem manajemen ASN berbasis merit yang transparan dan akuntabel.",
      },
      {
        text: "Meningkatkan kompetensi ASN melalui program pendidikan dan pelatihan yang terstruktur.",
      },
      {
        text: "Mendorong budaya kerja yang produktif, inovatif, dan berorientasi pelayanan.",
      },
      { text: "Memastikan kesejahteraan ASN yang layak dan berkeadilan." },
    ],

    career: [
      {
        year: "2021–Kini",
        role: "Kepala Badan Kepegawaian Daerah",
        institution: "Pemkot Serang",
      },
      {
        year: "2016–2021",
        role: "Kepala Bidang Pengembangan ASN",
        institution: "BKD Kota Serang",
      },
      {
        year: "2011–2016",
        role: "Kepala Sub Bagian Hukum Kepegawaian",
        institution: "BKD Kota Serang",
      },
    ],

    education: [
      {
        year: "2010",
        degree: "Magister Hukum (M.H.)",
        institution: "Universitas Indonesia",
      },
      {
        year: "2005",
        degree: "Sarjana Hukum (S.H.)",
        institution: "Universitas Sultan Ageng Tirtayasa",
      },
    ],

    achievements: [
      { icon: "🏆", title: "Penghargaan Manajemen ASN Terbaik", year: "2023" },
      { icon: "⭐", title: "Inovasi Sistem Merit Kepegawaian", year: "2022" },
    ],

    email: "bkd@serangkota.go.id",
    phone: "(0254) 200-009",
  },
];

export default function LeadershipDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const leader = leadersData.find((l) => l.id === id) ?? leadersData[0];

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            entry.target.classList.remove("reveal-hidden");
          }
        });
      },
      { threshold: 0.08 },
    );
    const els = contentRef.current?.querySelectorAll(".animate-reveal");
    els?.forEach((el) => {
      el.classList.add("reveal-hidden");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [leader]);

  return (
    <Template>
      {/* ── Hero Banner ── */}
      <section
        ref={heroRef}
        className="relative min-h-[340px] flex items-end pb-14 overflow-hidden pt-24"
        aria-label="Header profil pimpinan"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1614489366920-0b086a2ada99"
            alt="Gedung perkantoran kota modern dengan fasad kaca biru langit cerah"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />

          <div className="absolute inset-0 bg-gradient-to-br from-surface-dark/92 via-primary/82 to-accent/25" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-5 text-xs text-white/50"
            aria-label="Breadcrumb"
          >
            <Link
              href="/homepage"
              className="hover:text-white/80 transition-colors"
            >
              Beranda
            </Link>
            <span>/</span>
            <Link
              href="/leadership-list"
              className="hover:text-white/80 transition-colors"
            >
              Pimpinan
            </Link>
            <span>/</span>
            <span className="text-white/80 truncate max-w-[180px]">
              {leader.name}
            </span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-accent" />
            <span className="text-accent text-xs font-700 tracking-[0.35em] uppercase">
              {leader.category}
            </span>
          </div>
          <h1
            className="font-display text-white font-700 leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Profil Pimpinan
          </h1>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
      >
        {/* ── Split Layout: Photo + Info ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 -mt-8 relative z-10">
          {/* Left: Photo Card */}
          <div className="animate-reveal" style={{ transitionDelay: "0ms" }}>
            <div className="sticky top-28">
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-neutral-100 bg-white">
                {/* Portrait */}
                <div className="relative aspect-[4/5] img-zoom overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.imageAlt}
                    fill
                    className="object-cover object-top zoom-target"
                    sizes="(max-width: 1024px) 100vw, 380px"
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent" />
                  {leader.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-700 px-3 py-1 rounded-full bg-accent text-white uppercase tracking-wider">
                        Pimpinan Utama
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-600 px-3 py-1 rounded-full glass-dark text-white/80 uppercase tracking-wider">
                      {leader.category}
                    </span>
                  </div>
                </div>

                {/* Info strip */}
                <div className="p-6">
                  <h2 className="font-display text-xl font-700 text-neutral-900 leading-tight mb-1">
                    {leader.name}
                  </h2>
                  <p className="text-accent font-600 text-sm mb-1">
                    {leader.title}
                  </p>
                  <p className="text-neutral-400 text-xs mb-5">
                    {leader.period}
                  </p>

                  <div className="gradient-line mb-5" />

                  {/* Contact */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-neutral-600 break-all">
                        {leader.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-neutral-600">
                        {leader.phone}
                      </span>
                    </div>
                  </div>

                  <div className="gradient-line mt-5 mb-5" />

                  {/* Back button */}
                  <Link
                    href="/leadership-list"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-primary/20 text-primary font-600 text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 17l-5-5m0 0l5-5m-5 5h12"
                      />
                    </svg>
                    Kembali ke Daftar
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detail Info */}
          <div className="space-y-8 pt-2">
            {/* Name & Title */}
            <div className="animate-reveal" style={{ transitionDelay: "80ms" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
                <span className="text-xs font-600 text-neutral-400 uppercase tracking-widest">
                  Aktif Menjabat · {leader.period}
                </span>
              </div>
              <h2
                className="font-display text-3xl sm:text-4xl font-700 text-neutral-900 leading-tight mb-2"
                style={{ letterSpacing: "-0.025em" }}
              >
                {leader.name}
              </h2>
              <p className="text-accent font-600 text-lg">{leader.title}</p>
            </div>

            {/* Divider */}
            <div
              className="animate-reveal gradient-line"
              style={{ transitionDelay: "120ms" }}
            />

            {/* Bio */}
            <div
              className="animate-reveal"
              style={{ transitionDelay: "160ms" }}
            >
              <h3 className="font-display text-lg font-700 text-neutral-900 mb-3">
                Tentang
              </h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                {leader.bio}
              </p>
            </div>

            {/* Vision & Mission — Glassmorphism Cards */}
            <div
              className="animate-reveal"
              style={{ transitionDelay: "220ms" }}
            >
              <h3 className="font-display text-lg font-700 text-neutral-900 mb-4">
                Visi & Misi
              </h3>
              <div className="space-y-4">
                {/* Vision Card */}
                <div className="relative rounded-2xl overflow-hidden p-6 glass-blue border border-primary/15">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/8 -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-700 text-primary uppercase tracking-widest mb-2">
                        Visi
                      </p>
                      <p className="text-neutral-800 font-500 leading-relaxed text-sm">
                        {leader.vision}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="relative rounded-2xl overflow-hidden p-6 bg-white border border-neutral-100 shadow-soft">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 shadow-soft">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-700 text-accent uppercase tracking-widest mb-3">
                        Misi
                      </p>
                      <ul className="space-y-3">
                        {leader.missions.map((m, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                              <svg
                                className="w-3 h-3 text-accent"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="text-neutral-700 text-sm leading-relaxed">
                              {m.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Timeline */}
            <div
              className="animate-reveal"
              style={{ transitionDelay: "280ms" }}
            >
              <h3 className="font-display text-lg font-700 text-neutral-900 mb-5">
                Riwayat Karir
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
                <div className="space-y-5">
                  {leader.career.map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center shadow-soft z-10">
                        <div
                          className={`w-3 h-3 rounded-full ${i === 0 ? "bg-accent" : "bg-primary/40"}`}
                        />
                      </div>
                      <div className="flex-1 bg-white rounded-2xl border border-neutral-100 shadow-soft px-5 py-4 hover:border-primary/20 hover:shadow-elevated transition-all duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h4 className="font-600 text-neutral-900 text-sm">
                            {item.role}
                          </h4>
                          <span className="text-[11px] font-600 px-2.5 py-0.5 rounded-full bg-primary/8 text-primary">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-neutral-500 text-xs">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Achievements — 2 col on md+ */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-reveal"
              style={{ transitionDelay: "340ms" }}
            >
              {/* Education */}
              <div>
                <h3 className="font-display text-lg font-700 text-neutral-900 mb-4">
                  Pendidikan
                </h3>
                <div className="space-y-3">
                  {leader.education.map((edu, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-neutral-100 shadow-soft px-5 py-4 hover:border-primary/20 hover:shadow-elevated transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-600 text-neutral-900 text-sm leading-tight">
                            {edu.degree}
                          </p>
                          <p className="text-neutral-500 text-xs mt-0.5">
                            {edu.institution}
                          </p>
                          <p className="text-primary text-xs font-600 mt-1">
                            {edu.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="font-display text-lg font-700 text-neutral-900 mb-4">
                  Penghargaan
                </h3>
                <div className="space-y-3">
                  {leader.achievements.map((ach, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-neutral-100 shadow-soft px-5 py-4 hover:border-accent/20 hover:shadow-elevated transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-base">
                          {ach.icon}
                        </div>
                        <div>
                          <p className="font-600 text-neutral-900 text-sm leading-tight">
                            {ach.title}
                          </p>
                          <p className="text-accent text-xs font-600 mt-1">
                            {ach.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Other Leaders ── */}
        <div
          className="mt-20 animate-reveal"
          style={{ transitionDelay: "400ms" }}
        >
          <div className="gradient-line mb-10" />
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl font-700 text-neutral-900">
              Pimpinan Lainnya
            </h3>
            <Link
              href="/leadership-list"
              className="flex items-center gap-1.5 text-primary text-sm font-600 hover:gap-2.5 transition-all"
            >
              Lihat Semua
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {leadersData
              .filter((l) => l.id !== leader.id)
              .slice(0, 4)
              .map((l) => (
                <Link
                  key={l.id}
                  href={`/leadership-detail/${l.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                    <div className="relative aspect-[4/5] img-zoom overflow-hidden">
                      <Image
                        src={l.image}
                        alt={l.imageAlt}
                        fill
                        className="object-cover object-top zoom-target"
                        sizes="(max-width: 640px) 50vw, 25vw"
                        unoptimized
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white font-600 text-xs leading-tight">
                          {l.name}
                        </p>
                        <p className="text-accent text-[10px] mt-0.5">
                          {l.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Template>
  );
}
