import React from "react";

interface DanganronpaTextProps {
  text: string;
  options?: {
    rotationRange?: number; // grados de rotación aleatoria
    scaleRange?: number; // escala aleatoria adicional
    verticalRange?: number; // desplazamiento vertical en px
    letterSpacing?: number; // espaciado entre letras (em)
    baseScaleUpper?: number;
    baseScaleMedium?: number; // para letras con ascendentes
    baseScaleLower?: number;
  };
  className?: string;
}

const DanganronpaText: React.FC<DanganronpaTextProps> = ({
  text,
  options = {},
  className = "",
}) => {
  const {
    rotationRange = 10,
    scaleRange = 0.2,
    verticalRange = 3,
    letterSpacing = -0.05, // en em
    baseScaleUpper = 1,
    baseScaleMedium = 0.85,
    baseScaleLower = 0.75,
  } = options;
  // const className = "",

  const letters = text.split("");

  return (
    <span className={`inline-block relative whitespace-nowrap ${className}`}>
      {letters.map((char, index) => {
        if (char === " ") {
          return (
            <span
              key={index}
              style={{ display: "inline-block", width: "0.6em" }}
            />
          );
        }

        const isUpperCase = char === char.toUpperCase() && /[A-Z]/.test(char);
        const hasAscender = /^[bdfhklt]$/.test(char.toLowerCase());

        const baseScale = isUpperCase
          ? baseScaleUpper
          : hasAscender
          ? baseScaleMedium
          : baseScaleLower;

        const effectiveScaleRange = isUpperCase ? scaleRange : scaleRange * 0.3;
        const scale = baseScale + Math.random() * effectiveScaleRange;

        const rotation = (Math.random() * 2 - 1) * rotationRange;
        const yOffset = (Math.random() * 2 - 1) * verticalRange;

        return (
          <span
            key={index}
            style={{
              display: "inline-block",
              transform: `rotate(${rotation}deg) scale(${scale})`,
              transformOrigin: "center bottom",
              verticalAlign: "baseline",
              position: "relative",
              top: `${yOffset}px`,
              letterSpacing: `${letterSpacing}em`,
              userSelect: "none",
              whiteSpace: "pre",
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default DanganronpaText;
