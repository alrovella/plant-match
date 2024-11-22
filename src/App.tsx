import Logo from "./components/Logo";
import PlantForm from "./components/PlantForm";

function App() {
  return (
    <main className="flex flex-col justify-start items-center gap-4 md:gap-12 mx-auto pt-4 md:pt-24 max-w-xl h-screen">
      <div className="flex flex-col items-center gap-0.5 md:gap-2">
        <Logo className="text-green-500 size-20" />
        <h1 className="font-bold text-2xl">
          PLANT <strong>MATCH</strong>
        </h1>
      </div>
      <PlantForm />
    </main>
  );
}

export default App;
