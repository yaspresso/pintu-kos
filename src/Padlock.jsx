// Gembok SVG: gerbangnya naik saat status "success"
export default function Padlock({ open }) {
  return (
    <svg className={`padlock ${open ? "padlock--open" : ""}`} viewBox="0 0 48 60" aria-hidden="true">
      <path className="padlock__shackle" d="M14 28V18a10 10 0 0 1 20 0v10" fill="none" strokeWidth="5" strokeLinecap="round" />
      <rect x="6" y="28" width="36" height="28" rx="5" className="padlock__body" />
      <circle cx="24" cy="40" r="3.5" fill="#3b2a14" />
      <rect x="22.5" y="42" width="3" height="8" rx="1.5" fill="#3b2a14" />
    </svg>
  );
}