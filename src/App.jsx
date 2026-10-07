import { useState } from "react";
import Lampu from "./Lampu.jsx";
import Pintu from "./Pintu.jsx";
import PapanLogin from "./PapanLogin.jsx";
import Ruangan from "./Ruangan.jsx";
import "./App.css";

// ====== PERSONALISASI: ganti sesuai dirimu ======
const NAMA_KOS = "Kos Liytanie";
const NOMOR_KAMAR = "206";
const KALIMAT_KHAS = "Awas nyaman ya, tugas bisa ketunda gara gara kasur.";
const PASSWORD_BENAR = "kos123";

const PESAN_SALAH = [
  "Waduh, kuncinya salah. Coba lagi ya, jangan dobrak pintunya.",
  "Eh, itu bukan kunci kamar ini. Salah kamar, ya?",
  "Kata sandinya keliru. Jangan-jangan ketuker sama wifi kos?",
];
const PESAN_KOSONG = "Nama dan kata sandinya diisi dulu, baru bisa masuk.";
const PESAN_GELAP = "Gelap banget di sini. Nyalakan lampu teras dulu (klik bohlamnya).";

// ====== Helper ======
function sapaanWaktu(jam) {
  if (jam >= 4 && jam < 11) return "Selamat pagi";
  if (jam >= 11 && jam < 15) return "Selamat siang";
  if (jam >= 15 && jam < 18) return "Selamat sore";
  return "Selamat malam";
}

function kapital(teks) {
  const t = teks.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

// App menyimpan SEMUA state (lifting state up), lalu membagikannya ke komponen anak lewat props.
export default function App() {
  const [nama, setNama] = useState("");
  const [sandi, setSandi] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success
  const [pesan, setPesan] = useState("");
  const [lampuNyala, setLampuNyala] = useState(false);
  const [salam, setSalam] = useState("");

  const gagal = (teks) => {
    setPesan(teks);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 500); // reset agar getar bisa diulang
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lampuNyala) return gagal(PESAN_GELAP);
    if (!nama.trim() || !sandi) return gagal(PESAN_KOSONG);
    if (sandi !== PASSWORD_BENAR) {
      return gagal(PESAN_SALAH[Math.floor(Math.random() * PESAN_SALAH.length)]);
    }
    setPesan("");
    setSalam(sapaanWaktu(new Date().getHours()));
    setStatus("success");
  };

  const keluar = () => {
    setStatus("idle");
    setSandi("");
  };

  const jam = new Date().getHours();
  const malamLarut = jam >= 22 || jam < 4;
  const terbuka = status === "success";

  return (
    <main className={`scene ${lampuNyala ? "" : "scene--gelap"}`}>
      <Lampu nyala={lampuNyala} onToggle={() => setLampuNyala((v) => !v)} />

      <div className="kusen">
        <Ruangan
          salam={salam}
          nama={kapital(nama)}
          nomorKamar={NOMOR_KAMAR}
          kalimat={malamLarut ? "Sudah larut, jangan begadang ya." : KALIMAT_KHAS}
          onTutup={keluar}
        />

        <Pintu terbuka={terbuka} nomorKamar={NOMOR_KAMAR}>
          <PapanLogin
            namaKos={NAMA_KOS}
            nama={nama}
            sandi={sandi}
            onNamaChange={setNama}
            onSandiChange={setSandi}
            onSubmit={handleSubmit}
            pesan={!lampuNyala ? PESAN_GELAP : pesan}
            status={status}
            lampuNyala={lampuNyala}
            terbuka={terbuka}
          />
        </Pintu>
      </div>
    </main>
  );
}