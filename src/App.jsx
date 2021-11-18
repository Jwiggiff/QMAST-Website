import { createContext } from "react";
import Contact from "./_components/Contact";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Mission from "./_components/Mission";
import Teams from "./_components/Teams";

function App() {
  return (
    <div className="App">
      <Hero />
      <Header />
      <Mission />
      <Teams />
      <Contact />
    </div>
  );
}

export default App;
