import React from "react";

interface RandomStyledTextProps {
  text: string;
  options?: {
    rotationRange?: number;
    scaleRange?: number;
    spacingRange?: number;
    baseScaleUpper?: number;
    baseScaleLower?: number;
    className?: string;
  };
}

const RandomStyledText: React.FC<RandomStyledTextProps> = ({
  text,
  options = {},
}) => {
  const {
    rotationRange = 10,
    scaleRange = 0.2,
    spacingRange = 0.3, // ⚠️ más bajo = más juntas
    baseScaleUpper = 1,
    baseScaleLower = 0.5,
    className = "",
  } = options;

  const letters = text.split("");

  return (
    <div className={`flex items-end ${className}`}>
      {letters.map((char, index) => {
        if (char === " ") {
          return <div key={index} style={{ width: spacingRange * 4 }} />;
        }

        const isAlpha = /^[a-zA-Z]$/.test(char);
        if (!isAlpha) return null;

        const isUpperCase = char === char.toUpperCase();
        const baseScale = isUpperCase ? baseScaleUpper : baseScaleLower;
        const effectiveScaleRange = isUpperCase ? scaleRange : scaleRange * 0.3;

        const scale = baseScale + Math.random() * effectiveScaleRange;

        const rotation = (Math.random() * 2 - 1) * rotationRange;

        // --- Ajustar espaciado dinámicamente según letras vecinas ---
        const nextChar = letters[index + 1];
        const nextIsUpper = nextChar && /^[A-Z]$/.test(nextChar);
        const nextIsLower = nextChar && /^[a-z]$/.test(nextChar);

        let baseSpacing = -12;

        if (isUpperCase && nextIsUpper) baseSpacing = -10;
        else if (isUpperCase && nextIsLower) baseSpacing = -11;
        else if (!isUpperCase && nextIsUpper) baseSpacing = -11;
        else if (!isUpperCase && nextIsLower) baseSpacing = -12;

        const adjustedSpacing = baseSpacing * scale * spacingRange;

        return (
          <img
            key={index}
            src={`/letters/${char}.svg`}
            alt={char}
            style={{
              transform: `rotate(${rotation}deg) scale(${scale})`,
              marginRight: `${adjustedSpacing}px`,
              display: "inline-block",
              userSelect: "none",
            }}
            className="h-16"
          />
        );
      })}
    </div>
  );
};

export default RandomStyledText;
