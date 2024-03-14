import {
  Hero,
  Services,
  Equipment,
  GalleryExample,
  GalleryExample2,
} from "@/sections";
import { Navbar, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <GalleryExample />
        <GalleryExample2 />
        <Equipment />
      </main>
      <Footer />
    </>
  );
}
