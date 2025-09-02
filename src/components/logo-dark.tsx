import * as React from 'react';

const LogoDark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={40}
    viewBox="0 0 200 60"
    {...props}
  >
    <text
      x={100}
      y={35}
      fontFamily="Cairo, Arial, sans-serif"
      fontSize={32}
      fontWeight="bold"
      fill="#FFFFFF"
      textAnchor="middle"
    >
      salsabile
    </text>
    <path
      d="M40 50 Q100 0 160 50"
      stroke="#FFFFFF"
      strokeWidth={3}
      fill="none"
    />
  </svg>
);

export default LogoDark;
