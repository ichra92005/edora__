import * as React from 'react';

const UniversityLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={80}
    viewBox="0 0 400 120"
    {...props}
  >
    <style>
      {`
        .logo-text { font-family: 'Arial', sans-serif; fill: #FFFFFF; }
        .logo-text-main { font-size: 28px; font-weight: bold; }
        .logo-text-sub { font-size: 16px; }
        .logo-slogan { font-size: 12px; font-style: italic; }
      `}
    </style>
    <g transform="translate(10, 10)">
      {/* Icon Placeholder */}
      <path
        d="M60 0 C 20 0, 0 20, 0 60 C 0 100, 20 120, 60 120 C 100 120, 120 100, 120 60 C 120 20, 100 0, 60 0 Z M 60 10 C 94.3 10, 110 25.7, 110 60 C 110 94.3, 94.3 110, 60 110 C 25.7 110, 10 94.3, 10 60 C 10 25.7, 25.7 10, 60 10 Z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={3}
      />
      <path
        d="M30 60 Q60 30 90 60"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth={3}
      />
       <text x={60} y={70} textAnchor="middle" fill="#FFFFFF" fontSize="40" fontFamily="Arial, sans-serif">📖</text>

      {/* Text Part */}
      <g transform="translate(140, 20)">
        <text className="logo-text logo-text-main" x={0} y={25}>
          UNIVERSITY
        </text>
        <text className="logo-text logo-text-main" x={0} y={55}>
          OF SAIDA
        </text>
        <text className="logo-text logo-text-sub" x={0} y={75}>
          Dr. MOULAY TAHAR
        </text>
      </g>
    </g>
  </svg>
);

export default UniversityLogo;
