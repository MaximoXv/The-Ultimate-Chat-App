import { clx } from "../utils/clx";

const TextBoxSVG = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1517.69 185.69"
    width={"100%"}
    height={"200px"}
    overflow="visible"
    preserveAspectRatio="none"
    // preserveAspectRatio="xMidYMid meet"
    {...props}
    className={clx("draw-line", className)}
  >
    <defs>
      {/* <style>
        {".cls-1{stroke:#ff0;stroke-miterlimit:10;stroke-width:2px}"}
      </style> */}
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ff00cc" />
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff00cc" />
        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff00cc" />
      </filter>
    </defs>
    <g id="Capa_2" data-name="Capa 2">
      <g id="bordes_text_group">
        <path
          d="m70.84 3.94 189 180.75M.53 184.69 283.91 7.51M.53 11.44h1516.5M.53 184.69h1516.5M1275.72.76l160.87 183.93M1304.97 184.69 1517.03.76"
          stroke="#ff00cc"
          strokeWidth={6}
          fill="none"
          filter="url(#neon-glow)"
          opacity="0.7"
        />
        <path
          d="m70.84 3.94 189 180.75M.53 184.69 283.91 7.51M.53 11.44h1516.5M.53 184.69h1516.5M1275.72.76l160.87 183.93M1304.97 184.69 1517.03.76"
          //   strokeDasharray={1}
          //   strokeDashoffset={1}
          vectorEffect="non-scaling-stroke"
          style={{
            fill: "none",
            stroke: "#a1a1aa",
            strokeWidth: 2,
            strokeMiterlimit: 10,
          }}
        />
      </g>
    </g>
  </svg>
);
export default TextBoxSVG;
