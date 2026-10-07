import Padlock from "./Padlock.jsx";

// Form login di papan nama. Semua data dan aksi datang dari App lewat props.
export default function PapanLogin({
  namaKos,
  nama,
  sandi,
  onNamaChange,
  onSandiChange,
  onSubmit,
  pesan,
  status,
  lampuNyala,
  terbuka,
}) {
  return (
    <form
      className={`papan ${status === "error" ? "papan--getar" : ""}`}
      onSubmit={onSubmit}
      noValidate
    >
      <h1>{namaKos}</h1>
      <p className="papan__sub">Masuk sebagai penghuni</p>

      <label htmlFor="nama">Nama penghuni</label>
      <input
        id="nama"
        value={nama}
        onChange={(e) => onNamaChange(e.target.value)}
        autoComplete="username"
        disabled={!lampuNyala}
      />

      <label htmlFor="sandi">Kata sandi</label>
      <input
        id="sandi"
        type="password"
        value={sandi}
        onChange={(e) => onSandiChange(e.target.value)}
        autoComplete="current-password"
        disabled={!lampuNyala}
      />

      <p className="papan__pesan" role="alert">
        {pesan}
      </p>

      <button type="submit" className="tombol" disabled={!lampuNyala}>
        <Padlock open={terbuka} />
        Buka pintu
      </button>
      <p className="papan__hint">Demo: kata sandi kos123</p>
    </form>
  );
}