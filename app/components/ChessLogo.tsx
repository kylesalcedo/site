import React from 'react';

const ChessLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a2 2 0 0 0-2 2v2H9V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0 2-2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
    <path d="M12 11h.01" />
    <path d="M12 16h.01" />
  </svg>
);

export default ChessLogo;


