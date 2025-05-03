import type React from "react"

const TikTokLogo: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M160 0h-48v172.4c0 14.1-11.5 25.6-25.6 25.6s-25.6-11.5-25.6-25.6 11.5-25.6 25.6-25.6c4.8 0 9.3 1.3 13.2 3.5V89c-8.1-1.5-16.4-1.5-24.5 0C70.9 96 46.4 124.8 46.4 160c0 39.8 32.2 72 72 72 39.8 0 72-32.2 72-72V89.5c12 9.7 26.9 15.9 43.2 17.1V51c-7.2-.1-14.2-1.3-20.8-3.6-15.8-5.6-29-17.3-36.8-32.4-2.8-5.6-4.8-11.6-6.1-17.8z" />
  </svg>
)

export default TikTokLogo 