import Image from "next/image";
//logos
import abstract from "@/logos/abstract.svg";
import aib from "@/logos/aib.svg";
import crunchyroll from "@/logos/crunchyroll.svg";
import edeka from "@/logos/edeka.svg";
import gsmarenadotcom from "@/logos/gsmarenadotcom.svg";
import liberapay from "@/logos/liberapay.svg";
import ndr from "@/logos/ndr.svg";
import strava from "@/logos/strava.svg";

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
