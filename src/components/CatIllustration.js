function CatIllustration({ body = '#D8A48F', className = '' }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      width="100%"
      height="110"
      aria-hidden="true"
    >
      <path d="M15 90 Q10 40 35 25 L28 8 L45 22 Q60 16 75 22 L92 8 L85 25 Q110 40 105 90 Z" fill={body} />
      <path d="M40 55 Q60 75 80 55" stroke="#2E2321" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="45" cy="45" r="4" fill="#2E2321" />
      <circle cx="75" cy="45" r="4" fill="#2E2321" />
      <path d="M56 52 L64 52 L60 58 Z" fill="#2E2321" />
      <path d="M20 50 L38 54 M20 60 L38 58" stroke="#2E2321" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 50 L82 54 M100 60 L82 58" stroke="#2E2321" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default CatIllustration;
