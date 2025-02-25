import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Services2 } from "./components/Services2";
import { Sponsors } from "./components/Sponsors";
import { Analytics } from "@vercel/analytics/react"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Features />
      <Services />
      <Services2 />
      <Cta />
      <FAQ />
      <Footer />
      <ScrollToTop />
      <Analytics />
    </>
  );
}

export default App;
