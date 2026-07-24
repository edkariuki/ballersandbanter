import Hero from "./components/hero";
import Features from "./components/features";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div id="scroll-container" className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start h-screen">
        <Hero />
      </section>
      <section className="snap-start">
        <Features />
      </section>
      <section className="snap-start flex justify-center px-8 py-20">
        <div className="w-full max-w-6xl">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}