import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSec3 = () => section3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSec4 = () => section4Ref.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Header
        scrollToSec3={scrollToSec3}
        scrollToSec4={scrollToSec4}
      />
      <main>
        <Section1 />
        <Section2 />
        <Section3 ref={section3Ref} />
        <Section4 ref={section4Ref} />
        <Section5 />
      </main>
      <Footer />
    </>
  )
}

export default App;