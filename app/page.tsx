import { OrbitHero } from "@/components/heroSection/OrbitHero";
import { OrbitCyclePurpose } from "@/components/orbitCycle/OrbitCyclePurpose";
import { SearchPage } from "@/components/search/SearchPage";
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
        <SearchPage />
      </section>
      <section id="about-us">
        <OrbitCyclePurpose />
      </section>
    </div>
  );
}
