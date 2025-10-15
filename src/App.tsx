import CharacterNameSVG from "./components/character-name-svg";
import DanganronpaName from "./components/danganronpa-name";
import DanganronpaText from "./components/danganronpa-text";
import SvgComponent3 from "./components/idk3";
import SvgComponent4 from "./components/idk4";
import TextBoxSVG from "./components/text-box-svg";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen font-bold bg-gray-950">
        <div className="w-full flex justify-between items-center gap-1.5 p-3">
          <h1 className="text-blue-400">The Ultimate Chat</h1>
          <div className="">
            <span className="material-symbols-outlined text-blue-400">
              more_vert
            </span>
          </div>
        </div>
        <div className="w-full px-3">
          <div className="w-full flex gap-1.5 p-2 bg-gray-100 rounded-2xl">
            <span className="material-symbols-outlined text-blue-400">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar contacto..."
              className="w-full outline-0 text-blue-400"
            />
          </div>
        </div>
        <div className="w-full px-3 flex justify-center">
          <div className="w-full bg-amber-300 flex gap-1 flex-wrap rounded-2xl">
            <div className="bg-blue-400 rounded-2xl px-3 py-1 ">All Chats</div>
            <div className="bg-blue-400 rounded-2xl px-3 py-1 ">Groups</div>
            <div className="bg-blue-400 rounded-2xl px-3 py-1 ">Contacts</div>
            <div className="bg-blue-400 rounded-2xl px-3 py-1 ">All Chats</div>
            <div className="bg-blue-400 rounded-2xl px-3 py-1 ">All Chats</div>
          </div>
        </div>
      </div>
      {/* <SvgComponent /> */}
      {/* <SvgComponent2 /> */}
      <div className="relative w-1/3">
        <SvgComponent3
          className="top-0 left-0 !z-40"
          // style={{ zIndex: 40 }}
        />
        <SvgComponent4
          // className="absolute top-[0] left-[0] !z-20"
          className="absolute bottom-[5%] left-[12%] !-z-20 w-[82%]"
          // style={{ zIndex: 20 }}
        />
        {/* <div className="absolute bottom-[12%] left-[0] !z-20 w-full flex flex-col items-center">
          <div className="flex items-end gap-0.5">
            <p
              className="-rotate-6 text-2xl text-cyan-400"
              style={{
                textShadow: "0px 0px 6px #22d3ee ",
              }}
            >
              K
            </p>
            <p
              className="text-zinc-400 -translate-y-0.5 font-light"
              style={{
                textShadow: "0px 0px 4px #ff00cc",
              }}
            >
              okichi
            </p>
          </div>
          <div
            className="-rotate-6 -translate-y-2 flex justify-center items-center text-zinc-400 font-light"
            style={{
              textShadow: "0px 0px 4px #ff00cc ",
            }}
          >
            <p className="text-lg">O</p>
            <p className="">uma</p>
          </div>
        </div> */}
        <CharacterNameSVG
          // name="Máximo Ibarra"
          // name="Alejandro Urbani"
          // name="Pedro Ferraioli"
          name="Tamara Benitez"
          // name="Julian Toronto"
          // name="Ismael Lacroze"
          // name="Federico Jojo"
          className="absolute bottom-[13%] left-[25%] z-30 w-full"
        />
      </div>
      <div className="w-full">
        <TextBoxSVG className={""} />
      </div>
      <div>
        <DanganronpaName
          text="Kaede Akamatsu"
          options={{
            rotationRange: 10,
            scaleRange: 0.15,
            verticalRange: 3, // Las letras pueden subir o bajar hasta 3px
            letterSpacing: 1,
            baseScaleUpper: 1,
            baseScaleMedium: 0.75,
            baseScaleLower: 0.5,
            className: "bg-pink-200 p-4 rounded",
          }}
        />
      </div>
      {/* <TextBoxSVG className={""} /> */}
      {/* <SvgComponent5 className="" name="Kaede Akamatsu" /> */}
      <DanganronpaText
        text="Kaede Akamatsu"
        options={{
          rotationRange: 20,
          verticalRange: 2,
          letterSpacing: 0.01,
          scaleRange: 0.2,
          baseScaleUpper: 1,
          baseScaleMedium: 0.85,
          baseScaleLower: 0.75,
        }}
        className="font-danganronpa text-4xl"
      />
    </>
  );
}

export default App;
