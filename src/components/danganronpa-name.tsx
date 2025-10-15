import React from "react";

interface DanganronpaNameProps {
  text: string;
  options?: {
    rotationRange?: number;
    scaleRange?: number;
    verticalRange?: number; // Controla cuánto pueden subir o bajar las letras (en px)
    letterSpacing?: number;
    baseScaleUpper?: number;
    baseScaleMedium?: number; // Para letras con ascendentes (b,d,f,h,k,l,t)
    baseScaleLower?: number;
    className?: string;
  };
}

const DanganronpaName: React.FC<DanganronpaNameProps> = ({
  text,
  options = {},
}) => {
  const {
    rotationRange = 10,
    scaleRange = 0.2,
    verticalRange = 3, // Por defecto, ±3px de movimiento vertical
    letterSpacing = -0.6, // Controla el espaciado entre letras (negativo = más juntas)
    baseScaleUpper = 1,
    baseScaleMedium = 0.75, // Escala intermedia para letras con ascendentes
    baseScaleLower = 0.5,
    className = "",
  } = options;

  const letters = text.split("");
  let currentX = 0; // Para trackear la posición X de cada letra

  return (
    <div className={`relative inline-block ${className}`}>
      {letters.map((char, index) => {
        if (char === " ") {
          currentX += 40; // Espacio entre palabras
          return null;
        }

        const isAlpha = /^[a-zA-Z]$/.test(char);
        if (!isAlpha) return null;

        const isUpperCase = char === char.toUpperCase();
        // Detectamos letras con ascendentes
        const hasAscender = /^[bdfhklt]$/.test(char.toLowerCase());
        // Detectamos letras más anchas que necesitan más espacio
        const hasWiderWidth = /^[m]$/.test(char.toLowerCase());
        const hastWiderWidth = /^[s]$/.test(char.toLowerCase());

        // Determinamos la escala base según el tipo de letra
        const baseScale = isUpperCase
          ? baseScaleUpper
          : hasAscender
          ? baseScaleMedium
          : baseScaleLower;
        const effectiveScaleRange = isUpperCase ? scaleRange : scaleRange * 0.3;

        const scale = baseScale + Math.random() * effectiveScaleRange;

        const rotation = (Math.random() * 2 - 1) * rotationRange;

        // Calculamos un offset Y aleatorio para el movimiento vertical
        const yOffset = (Math.random() * 2 - 1) * verticalRange; // Entre -verticalRange y +verticalRange

        // Ajustamos el espaciado según el contexto
        const nextChar = letters[index + 1];
        const nextIsUpper = nextChar && /^[A-Z]$/.test(nextChar);
        let xAdjustment = letterSpacing * 16; // Base spacing

        // Para el espaciado, tratamos las letras con ascendentes como minúsculas
        if (isUpperCase && nextIsUpper) xAdjustment *= 1.2;
        else if (isUpperCase && !nextIsUpper) xAdjustment *= 0.8;

        const letterX = currentX;

        // Determinamos el ancho base de la letra
        let baseWidth = isUpperCase ? 24 : 16;
        // Ajustamos el ancho para letras más anchas
        if (hasWiderWidth) baseWidth = 40; // Ancho especial para letras como 'm'
        if (hastWiderWidth) baseWidth = 2;

        currentX += baseWidth + xAdjustment;

        return (
          <img
            key={index}
            src={
              isUpperCase
                ? `/letters/${char}-mayus.svg`
                : `/letters/${char}-minus.svg`
            }
            alt={char}
            style={{
              position: "absolute",
              left: `${letterX}px`,
              top: `${yOffset}px`,
              transform: `rotate(${rotation}deg) scale(${scale})`,
              display: "inline-block",
              userSelect: "none",
              height: "64px",
              transformOrigin: "center bottom",
            }}
          />
        );
      })}
      {/* Div invisible para mantener el espacio correcto */}
      <div style={{ width: `${currentX}px`, height: "64px" }} />
    </div>
  );
};

export default DanganronpaName;
