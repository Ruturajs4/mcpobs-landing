import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { BuiltOn } from "@/components/built-on";
import { FeatureClassification } from "@/components/feature-classification";
import { FeatureProgress } from "@/components/feature-progress";
import { FeatureDownstream } from "@/components/feature-downstream";
import { Integration } from "@/components/integration";
import { ControlPlane } from "@/components/control-plane";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BuiltOn />
        <FeatureClassification />
        <FeatureProgress />
        <FeatureDownstream />
        <Integration />
        <ControlPlane />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
