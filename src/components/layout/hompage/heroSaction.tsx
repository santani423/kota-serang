export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">   
            <h1 className="text-4xl font-bold mb-4">Selamat Datang di Kota Serang</h1>
            <p className="text-lg text-gray-700 mb-6">Temukan informasi terbaru, layanan publik, dan berbagai hal menarik tentang Kota Serang di sini.</p>
            <a href="#services" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Jelajahi Layanan</a>
        </div>
    </section>
  );
}