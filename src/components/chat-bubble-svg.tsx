import React from "react";

type ChatBubbleSVGProps = {
  text: string;
  width?: number;
  height?: number;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
};

export const ChatBubbleSVG: React.FC<ChatBubbleSVGProps> = ({
  text,
  width = 300,
  height = 180,
  borderColor = "#ff00cc",
  backgroundColor = "rgba(0,0,0,0.75)",
  textColor = "#ffffff",
}) => {
  return (
    <svg
      viewBox="0 0 300 180"
      width={width}
      height={height}
      style={{ display: "block" }}
    >
      <defs>
        <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Borde */}
      <polygon
        points="0,0 270,20 290,160 20,170"
        fill={borderColor}
        filter="url(#neon)"
      />

      {/* Fondo interno */}
      <polygon points="10,10 260,30 270,150 30,160" fill={backgroundColor} />

      {/* Texto */}
      <foreignObject x="20" y="30" width="240" height="120">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            color: textColor,
            fontSize: "16px",
            fontFamily: "SeuratPro, sans-serif",
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
          }}
        >
          {text}
        </div>
      </foreignObject>
    </svg>
  );
};
