const CharacterNameSVG = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => {
  const [firstName, lastName] = name.split(" ");

  const firstInitial = firstName.charAt(0);
  const restFirst = firstName.slice(1);
  const lastInitial = lastName.charAt(0);
  const restLast = lastName.slice(1);

  const isNarrowLetterFirst = (char: string) =>
    ["I", "J", "L", "T", "F"].includes(char);
  const isNarrowLetterLast = (char: string) =>
    ["I", "J", "L", "T", "F"].includes(char);
  const spacingFixFirst = (char: string) =>
    isNarrowLetterFirst(char) ? 10 : 23;
  const spacingFixLast = (char: string) => (isNarrowLetterLast(char) ? 14 : 22);

  return (
    <svg
      viewBox="0 0 300 120"
      width="100%"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .glow-blue {
          fill: #22d3ee;
          filter: drop-shadow(0 0 3px #22d3ee) drop-shadow(0 0 6px #22d3ee);
        }

        .glow-pink {
          fill: #ff00cc;
          filter: drop-shadow(0 0 3px #ff00cc) drop-shadow(0 0 6px #ff00cc);
        }

        .light {
          font-weight: 300;
          fill: #d4d4d8;
        }

        .rotate {
          transform: rotate(-6deg);
          transform-origin: center;
        }
      `}</style>

      {/* Primera línea: Kokichi */}
      <g transform="translate(20, 50)">
        <text
          className="glow-blue rotate"
          fontSize="32"
          fontFamily="SeuratPro"
          //   x="-4"
          //   y="-15"
        >
          {firstInitial}
        </text>
        <text
          x={spacingFixFirst(firstInitial)}
          //   y="-4"
          y="10"
          className="glow-pink light"
          fontSize="24"
          fontFamily="SeuratPro"
        >
          {restFirst}
        </text>
      </g>

      {/* Segunda línea: Oma */}
      <g transform="translate(40, 95)">
        <text
          className="glow-pink light rotate"
          fontSize="28"
          fontFamily="SeuratPro"
          //   x="13"
          //   y="-10"
        >
          {lastInitial}
        </text>
        <text
          x={spacingFixLast(lastInitial)}
          y="-2"
          //   y="10"
          className="glow-pink light rotate"
          fontSize="22"
          fontFamily="SeuratPro"
        >
          {restLast}
        </text>
      </g>
    </svg>
  );
};

export default CharacterNameSVG;
