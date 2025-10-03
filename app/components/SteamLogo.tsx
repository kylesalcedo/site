import React from 'react';

const SteamLogo = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2a10 10 0 0 0-9.6 12.4c.5 1.5 1.7 2.8 3.2 3.6A10 10 0 0 0 12 22a10 10 0 0 0 9.6-12.4c-.5-1.5-1.7-2.8-3.2-3.6A10 10 0 0 0 12 2Z" />
    <path d="M12 2v10" />
    <path d="M12 12l5.2-3" />
    <path d="M12 12l-5.2-3" />
    <path d="M12 12l-5.2 3" />
    <path d="M12 12l5.2 3" />
  </svg>
);

export default SteamLogo;
