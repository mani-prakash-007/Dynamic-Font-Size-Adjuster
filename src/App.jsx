import { FontSizeApp } from "./components/FontSizeApp";
function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="border border-black w-120 h-120 my-10">
          <h1 className="bg-black py-3 text-white font-bold text-xl text-center">
            Dynamic Font Size Adjuster
          </h1>
          <div className="flex justify-center">
            <FontSizeApp></FontSizeApp>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
