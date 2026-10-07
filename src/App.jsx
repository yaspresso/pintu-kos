import { useState } from "react";
import Padlock from "./Padlock.jsx";
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

export default function App() {
  const [nama, setNama] = useState("");
  const [sandi, setSandi] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success
  const [pesan, setPesan] = useState("");
  const [lampuNyala, setLampuNyala] = useState(false); // mulai gelap, penghuni harus nyalakan lampu
  const [salam, setSalam] = useState("");

  const gagal = (teks) => {
    setPesan(teks);
    setStatus("error");
    // reset agar animasi getar bisa diputar ulang
    setTimeout(() => setStatus("idle"), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lampuNyala) return gagal(PESAN_GELAP);
    if (!nama.trim() || !sandi) return gagal(PESAN_KOSONG);
    if (sandi !== PASSWORD_BENAR) {
      const acak = PESAN_SALAH[Math.floor(Math.random() * PESAN_SALAH.length)];
      return gagal(acak);
    }
    setPesan("");
    setSalam(sapaanWaktu(new Date().getHours()));
    setStatus("success");
  };

  const keluar = () => {
    setStatus("idle");
    setSandi("");
  };

  const terbuka = status === "success";
  const jam = new Date().getHours();
  const malamLarut = jam >= 22 || jam < 4;

  return (
    <main className={`scene ${lampuNyala ? "" : "scene--gelap"}`}>
      <button
        type="button"
        className="lampu"
        onClick={() => setLampuNyala((v) => !v)}
        aria-label={lampuNyala ? "Matikan lampu teras" : "Nyalakan lampu teras"}
        aria-pressed={lampuNyala}
      >
        <span className="lampu__kabel" />
        <span className="lampu__bohlam" />
      </button>

      <div className="kusen">
        <section className="ruangan" aria-live="polite">
          <h2>
            {salam}, {kapital(nama) || "penghuni"}.
          </h2>
          <p>Pintu kamar {NOMOR_KAMAR} sudah terbuka.</p>
          <p className="ruangan__kalimat">
            {malamLarut ? "Sudah larut, jangan begadang ya." : KALIMAT_KHAS}
          </p>
          <button type="button" className="tombol tombol--kecil" onClick={keluar}>
            Tutup pintu
          </button>
        </section>

        <div className={`pintu ${terbuka ? "pintu--buka" : ""}`}>
          <div className="plakat" aria-label={`Kamar nomor ${NOMOR_KAMAR}`}>
            No. {NOMOR_KAMAR}
          </div>

          <form
            className={`papan ${status === "error" ? "papan--getar" : ""}`}
            onSubmit={handleSubmit}
            noValidate
          >
            <h1>{NAMA_KOS}</h1>
            <p className="papan__sub">Masuk sebagai penghuni</p>

            <label htmlFor="nama">Nama penghuni</label>
            <input
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              autoComplete="username"
              disabled={!lampuNyala}
            />

            <label htmlFor="sandi">Kata sandi</label>
            <input
              id="sandi"
              type="password"
              value={sandi}
              onChange={(e) => setSandi(e.target.value)}
              autoComplete="current-password"
              disabled={!lampuNyala}
            />

            <p className="papan__pesan" role="alert">
              {!lampuNyala ? PESAN_GELAP : pesan}
            </p>

            <button type="submit" className="tombol" disabled={!lampuNyala}>
              <Padlock open={terbuka} />
              Buka pintu
            </button>
            <p className="papan__hint">Demo: kata sandi kos123</p>
          </form>
          <span className="gagang" />
        </div>
      </div>
    </main>
  );
}