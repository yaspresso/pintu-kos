// Pintu kayu + plakat + gagang. Isi pintu (form) dikirim lewat children.
export default function Pintu({ terbuka, nomorKamar, children }) {
  return (
    <div className={`pintu ${terbuka ? "pintu--buka" : ""}`}>
      <div className="plakat" aria-label={`Kamar nomor ${nomorKamar}`}>
        No. {nomorKamar}
      </div>
      {children}
      <span className="gagang" />
    </div>
  );
}