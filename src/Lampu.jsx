// Tombol lampu teras. Tidak punya state sendiri: semuanya dari props.
export default function Lampu({ nyala, onToggle }) {
  return (
    <button
      type="button"
      className="lampu"
      onClick={onToggle}
      aria-label={nyala ? "Matikan lampu teras" : "Nyalakan lampu teras"}
      aria-pressed={nyala}
    >
      <span className="lampu__kabel" />
      <span className="lampu__bohlam" />
    </button>
  );
}