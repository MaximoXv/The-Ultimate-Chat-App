export default function ChatMessage({
  text = "¡Hola! Esto es un mensaje de prueba al estilo Danganronpa.",
}) {
  return (
    <div className="relative max-w-[75%] bg-black text-white px-6 py-4 my-4 rounded-md shadow-lg border-4 border-fuchsia-500 font-[SeuratPro] animate-fade-in drop-shadow-neon">
      <div className="absolute -top-3 -left-3 w-4 h-4 bg-fuchsia-500 rotate-45"></div>
      <p className="text-lg leading-snug">{text}</p>
    </div>
  );
}
