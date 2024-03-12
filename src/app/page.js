import { Hero, Services, Equipment, GalleryExample } from "@/sections";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Equipment />
        <GalleryExample/>
      </main>
      {/* <Navbar /> */}
    </>
  );
}
