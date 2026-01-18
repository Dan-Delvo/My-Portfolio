import reactLogo from "./assets/react.svg";
import PillNav from "./component/PillNav";
import { Hero } from "./pages/Hero";
import { Section } from "./component/Section";
import Navbar from "./components/Navbar";
import { About } from "./pages/About";

function App() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <Navbar />
      <Section id="home">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
    </>
  );
}

export default App;
