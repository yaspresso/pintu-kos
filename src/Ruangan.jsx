// Isi kamar di balik pintu, tampil setelah login berhasil.
export default function Ruangan({ salam, nama, nomorKamar, kalimat, onTutup }) {
  return (
    <section className="ruangan" aria-live="polite">
      <h2>
        {salam}, {nama || "penghuni"}.
      </h2>
      <p>Pintu kamar {nomorKamar} sudah terbuka.</p>
      <p className="ruangan__kalimat">{kalimat}</p>
      <button type="button" className="tombol tombol--kecil" onClick={onTutup}>
        Tutup pintu
      </button>
    </section>
  );
}