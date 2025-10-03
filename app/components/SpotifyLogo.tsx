import React from 'react';

const SpotifyLogo = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M8 10.8c-2.43 1.48-5.32 1.83-7.79.88C-.94 11.23-.27 8.39 2 7.02c2.27-1.37 5.09-1.31 7.42.22 2.33 1.53 2.14 4.5-.42 5.86Zm4.5-2.71c-3.12 1.9-6.9 2.37-10.08 1.15C.53 8.35 0 5.4 3.09 3.62c3.09-1.78 6.64-1.76 9.87.27 3.23 2.03 2.87 5.17-.5 6.69ZM17 5.46c-4.14 2.52-9.13 3.14-13.36 1.53C.95 5.84 0 2.96 4.14.44c4.14-2.52 8.87-2.3 13.36-.26 4.49 2.05 3.98 5.4-4.14 5.28Z" />
  </svg>
);

export default SpotifyLogo;


