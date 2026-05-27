import BeforeAfter from "./beforeAfter/BeforeAfter";
import Choose from "./choose/Choose";
import Hero from "./hero/Hero";
import Introduccion from "./introduction/Introduccion";
import Who from "./who/Who";

export default function Home() {
  return (
    <div>
      <Hero />
      <Introduccion />
      <Who />
      <Choose />
      <div className="slogan">
        <h2>&quot;Your home clean, your free time&quot;</h2>
      </div>
      <BeforeAfter />
    </div>
  );
}
