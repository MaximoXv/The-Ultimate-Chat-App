const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 238.67 65.68"
    width={"20%"}
    {...props}
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ff00cc" />
        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ff00cc" />
        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ff00cc" />
      </filter>
    </defs>
    <path
      d="M.26 64.72 238.41.97"
      data-name="Capa 2"
      style={{
        fill: "none",
        stroke: "#a1a1aa",
        strokeMiterlimit: 10,
        strokeWidth: 2,
      }}
      filter="url(#glow)"
    />
  </svg>
);
export default SvgComponent;
