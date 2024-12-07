import { OrbitHero } from "@/components/heroSection/OrbitHero";
import { SpaceDebrisStats } from "@/components/spaceDebris/SpaceDebrisStats";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <OrbitHero />
      </section>
      <section id="solution">
        <SpaceDebrisStats />
      </section>
      <section id="calculator">
        
      </section>
      <section id="about-us">
        {/* ...About Us content... */}
      </section>
    </div>
  );
}
