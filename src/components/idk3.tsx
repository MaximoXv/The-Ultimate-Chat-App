import { clx } from "../utils/clx";

const SvgComponent3 = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 269.88 429.13"
    overflow="visible"
    // preserveAspectRatio="none"
    width={"100%"}
    {...props}
    className={clx("draw-line", className)}
  >
    <defs>
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ff00cc" />
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff00cc" />
        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff00cc" />
      </filter>
    </defs>

    <path
      d="m12.52 94.21 36.99 334.81M.55 114.01 173.33.84M151.6 2.91l105.28 363.98M24.38 268.64l219 11.25M31.47 411.14l238.16-63.75"
      style={{
        fill: "none",
        stroke: "#a1a1aa",
        strokeWidth: 2,
        strokeMiterlimit: 10,
        filter: "url(#neon-glow)",
        strokeDasharray: 600,
        strokeDashoffset: 600,
      }}
    />
  </svg>
);

export default SvgComponent3;
