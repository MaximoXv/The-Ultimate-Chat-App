function App() {
  return (
    <>
      <div className="w-screen min-h-screen font-bold">
        <div className="w-full flex justify-between items-center gap-1.5 p-2">
          <h1 className="text-blue-400">The Ultimate Chat</h1>
          <div className="">
            <span className="material-symbols-outlined text-blue-400">
              more_vert
            </span>
          </div>
        </div>
        <div className="w-full p-2">
          <div className="w-full flex gap-1.5 p-2 bg-gray-400 rounded-2xl">
            <input type="text" placeholder="Buscar contacto..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
