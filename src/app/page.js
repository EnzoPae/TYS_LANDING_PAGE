import { Hero, Services, Equipment, GalleryExample } from "@/sections";
import { Navbar, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GalleryExample />
        <Equipment />
      </main>
      <Footer />
    </>
  );
}
