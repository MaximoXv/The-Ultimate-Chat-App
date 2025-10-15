// // src/components/ChatBox.jsx
// export default function ChatBox({
//   name = "Kokichi Oma",
//   avatar = "/kokichi.png",
//   text = "¿Estás seguro de eso? Suena como algo que diría un mentiroso...",
//   align = "left", // left (player) or right (AI/contrincante)
//   borderColor = "fuchsia-500",
// }) {
//   const isLeft = align === "left";

//   return (
//     <div
//       className={`flex items-end gap-4 max-w-3xl mx-auto my-6 ${
//         isLeft ? "flex-row" : "flex-row-reverse"
//       }`}
//     >
//       {/* Avatar */}
//       <img
//         src={avatar}
//         alt={`${name}'s avatar`}
//         className="w-20 h-20 rounded border-4 border-white shadow-lg object-cover"
//       />

//       {/* Message bubble */}
//       <div
//         className={`relative bg-black text-white px-6 py-4 rounded-md border-4 border-${borderColor} font-[SeuratPro] animate-fade-in drop-shadow-neon`}
//       >
//         {/* "Cut corner" style */}
//         <div
//           className={`absolute -top-3 ${
//             isLeft ? "-left-3" : "-right-3"
//           } w-4 h-4 bg-${borderColor} rotate-45`}
//         ></div>

//         {/* Name */}
//         <div className="text-sm text-white/70 font-bold mb-1 uppercase tracking-wide">
//           {name}
//         </div>

//         {/* Message text */}
//         <p className="text-base leading-snug">{text}</p>
//       </div>
//     </div>
//   );
// }

export default function ChatBox({
  name = "Shuichi Saihara",
  avatar = "/shuichi.png",
  text = "Esto... esto no tiene sentido. Pero es la única verdad posible.",
  align = "left",
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`flex items-end gap-4 max-w-4xl mx-auto my-6 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg"
      />

      {/* Chat box */}
      <div className="relative">
        {/* Nombre del personaje */}
        <div
          className={`absolute -top-6 ${
            isLeft ? "left-2" : "right-2"
          } px-3 py-1 bg-fuchsia-700 text-white text-xs uppercase font-bold rounded-full drop-shadow`}
        >
          {name}
        </div>

        {/* Caja inclinada */}
        <div
          className={`chat-bubble ${
            isLeft ? "origin-left" : "origin-right"
          } animate-fade-in`}
        >
          <p className="text-white text-base font-[SeuratPro] leading-snug px-6 py-4">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
