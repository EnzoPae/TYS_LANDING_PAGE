import Image from "next/image";
//logos
import abstract from "@/assets/logos/abstract.svg";
import aib from "@/assets/logos/aib.svg";
import crunchyroll from "@/assets/logos/crunchyroll.svg";
import edeka from "@/assets/logos/edeka.svg";
import gsmarenadotcom from "@/assets/logos/gsmarenadotcom.svg";
import liberapay from "@/assets/logos/liberapay.svg";
import ndr from "@/assets/logos/ndr.svg";
import strava from "@/assets/logos/strava.svg";

const ClientesLogos = () => {
  return (
    <>
      <Image src={abstract} alt={"logo"} width="auto" />
      <Image src={aib} alt={"logo"} width="auto" />
      <Image src={crunchyroll} alt={"logo"} width="auto" />
      <Image src={edeka} alt={"logo"} width="auto" />
      <Image src={gsmarenadotcom} alt={"logo"} width="auto" />
      <Image src={liberapay} alt={"logo"} width="auto" />
      <Image src={ndr} alt={"logo"} width="auto" />
      <Image src={strava} alt={"logo"} width="auto" />
    </>
  );
};

export default ClientesLogos;
