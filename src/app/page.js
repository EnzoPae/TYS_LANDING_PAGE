import { Hero, Services, Equipment, GalleryExample } from "@/sections";
import { Navbar, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <GalleryExample />
        <Equipment />
      </main>
      <Footer />
      {/* <Navbar /> */}
    </>
  );
}
