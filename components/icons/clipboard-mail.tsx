
const ClipboardMail = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Main Clipboard Body - cut off at bottom right */}
    <path d="M5 3h14a2 2 0 0 1 2 2v13h-8v3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="M9 3V1h6v2" /> {/* Top clip */}
    
    {/* Visual "Content" lines - shortened to clear the bottom right corner */}
    <path d="M8 7h8" />
    <path d="M8 11h8" />
    <path d="M8 15h4" />

    {/* Mini Envelope (Bottom-Right Corner) - with background fill */}
    <g transform="translate(13, 16)">
      {/* Background to hide clipboard behind it */}
      <rect x="0" y="0" width="10" height="7" rx="1" fill="currentColor" fillOpacity="0" />
      <rect x="0" y="0" width="10" height="7" rx="1" stroke="currentColor" fill="var(--color-background, white)" />
      <path d="M0 1l5 3 5-3" stroke="currentColor" />
    </g>
  </svg>
);

export default ClipboardMail;
