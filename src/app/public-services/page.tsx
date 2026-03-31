
"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import Leaflet agar tidak error SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then(mod => mod.Popup),
  { ssr: false }
);

let leafletIconUrl = "https://cctv.serangkota.go.id/assets/cctv.png";


export default function PublicServicesPage() {
  const [cctvData, setCctvData] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string|null>(null); // Tetap digunakan
  const mapRef = useRef<any>(null);
  const [customIcon, setCustomIcon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Inisialisasi customIcon hanya di client
  useEffect(() => {
    if (typeof globalThis.window === 'object') {
      import("leaflet").then(L => {
        setCustomIcon(
          new L.Icon({
            iconUrl: leafletIconUrl,
            iconSize: [38, 38],
            iconAnchor: [22, 38],
            popupAnchor: [-3, -38],
          })
        );
      });
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("https://cctv.serangkota.go.id/api/cctv")
      .then(res => res.json())
      .then(data => {
        setCctvData(data.features);
        setFiltered(data.features);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (search === "") {
      setFiltered(cctvData);
    } else {
      setFiltered(
        cctvData.filter((f: any) =>
          f.properties.place_name.toLowerCase().includes(search.toLowerCase()) ||
          f.properties.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, cctvData]);

  // Tanggal hari ini
  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", { year: "numeric", month: "numeric", day: "numeric" });

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f8fafc" }}>
      <div style={{ position: "relative", zIndex: 10, padding: 16, background: "#1e3a8a", color: "white" }}>
        <h1 style={{ margin: 0, fontWeight: 700, fontSize: 24 }}>CCTV Kota Serang</h1>
        <div style={{ fontSize: 14 }}>{formattedDate}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: 24, padding: 16, flexWrap: "wrap" }}>
        {/* Sidebar Daftar CCTV */}
        <div style={{ minWidth: 320, maxWidth: 400, flex: 1, background: "white", borderRadius: 12, boxShadow: "0 2px 8px #0001", padding: 16, height: 600, overflow: "auto", border: '2px solid #1e3a8a' }}>
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8, color: '#1e3a8a' }}>Titik Lokasi CCTV Kota Serang</div>
          <input
            type="text"
            placeholder="Cari nama/deskripsi lokasi..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1.5px solid #1e3a8a", marginBottom: 12, outline: 'none' }}
          />
          {(() => {
            if (loading) {
              return <div style={{ textAlign: 'center', marginTop: 40 }}>Memuat data CCTV...</div>;
            }
            if (filtered.length === 0) {
              return <div style={{ textAlign: 'center', marginTop: 40, color: '#888' }}>Tidak ada data CCTV ditemukan.</div>;
            }
            return (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {filtered.map((feature: any) => (
                  <li key={feature.properties.id} style={{ display: "flex", alignItems: "center", marginBottom: 12, gap: 8, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                    <img src={leafletIconUrl} alt="CCTV Icon" width={32} height={32} style={{ marginRight: 8 }} />
                    <span style={{ flex: 1, fontWeight: 500 }}>{feature.properties.place_name}</span>
                    <button
                      style={{ background: "#1e3a8a", color: "white", border: 0, borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontWeight: 500 }}
                      onClick={() => setSelectedId(feature.properties.id)}
                    >Lihat CCTV</button>
                  </li>
                ))}
              </ul>
            );
          })()}
          <div style={{ marginTop: 12, fontSize: 14 }}>Total CCTV: <b>{filtered.length}</b></div>
        </div>

        {/* Map Section */}
        <div style={{ flex: 2, minWidth: 350, height: 600, position: "relative", border: '2.5px solid #1e3a8a', borderRadius: 16, boxShadow: '0 4px 16px #0002', background: '#e0e7ef', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: 12, left: 20, zIndex: 1000, background: '#1e3a8a', color: 'white', padding: '6px 18px', borderRadius: 8, fontWeight: 600, fontSize: 16, boxShadow: '0 2px 8px #0002' }}>
            Peta Lokasi CCTV
          </div>
          <div style={{ flex: 1, width: '100%', height: '100%', position: 'relative' }}>
            {globalThis.window !== undefined && customIcon && !loading && (
              <MapContainer
                center={[-6.1161948, 106.1829327]} // Gerbang Tol Serang Timur
                zoom={17}
                style={{ width: "100%", height: "100%", borderRadius: 16, minHeight: 400 }}
                whenReady={() => {
                  if (mapRef.current) return;
                  // MapContainer akan otomatis mengisi ref jika diberikan prop ref
                }}
                zoomControl={true}
                preferCanvas={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://serangkota.go.id/">Diskominfo Kota Serang</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filtered.map((feature: any) => (
                  <Marker
                    key={feature.properties.id}
                    position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}
                    icon={customIcon}
                    eventHandlers={{
                      click: () => setSelectedId(feature.properties.id),
                    }}
                  >
                    <Popup minWidth={300} maxWidth={350}>
                      <div style={{ textAlign: "center" }}>
                        <b>Nama CCTV:</b> <br />{feature.properties.place_name}<br /><br />
                        <b>Deskripsi:</b> <br />{feature.properties.description}<br />
                        <div style={{ width: 280, height: 180, margin: "10px auto" }}>
                          <iframe
                            src={feature.properties.rtsp_ip}
                            style={{ width: "100%", height: "100%" }}
                            title={`CCTV-${feature.properties.id || feature.properties.place_name || 'stream'}`}
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div><b>Alamat:</b> <br />{feature.properties.address}</div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            )}
            {loading && (
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: '#1e3a8a', fontWeight: 600, fontSize: 18 }}>Memuat peta...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
