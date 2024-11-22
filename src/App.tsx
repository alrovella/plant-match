import Logo from "./components/Logo";
import Form from "./components/Form";

function App() {
  return (
    <main className="flex flex-col justify-start items-center gap-4 mx-auto px-4 md:px-0 pt-4 max-w-xl h-screen">
      <header className="flex flex-col items-center gap-0.5 md:gap-2">
        <Logo className="text-green-500 size-20" />
        <h1 className="font-bold text-2xl select-none">
          PLANT <strong>MATCH</strong>
        </h1>
      </header>
      <Form />
    </main>
  );
}

export default App;
