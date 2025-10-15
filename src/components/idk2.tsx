import { SVGProps } from "react";
const SvgComponent2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 269.88 429.13"
    overflow={"visible"}
    width={"10%"}
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#a1a1aa;stroke-miterlimit:10;stroke-width:2px}"
        }
      </style>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ff00cc" />
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff00cc" />
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff00cc" />
        </filter>
      </defs>
    </defs>
    <g id="Capa_2" data-name="Capa 2">
      <g id="Capa_6" data-name="Capa 6">
        <path
          d="m12.52 94.21 36.99 334.81M.55 114.01 173.33.84M151.6 2.91l105.28 363.98M24.38 268.64l219 11.25M31.47 411.14l238.16-63.75"
          className="cls-1"
          filter="url(#glow)"
        />
      </g>
    </g>
  </svg>
);
export default SvgComponent2;
