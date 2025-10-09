import Header from "../Components/Header.jsx";
import GallerySec from "../Components/GallerySec.jsx";
import DateSec from "../Components/DateSec.jsx";
import { assets } from "../../public/images/assets.js"; 

export default function Home() {
  return (
    <>
      <Header />
      <GallerySec />
      <DateSec bg={assets.seaView1} /> 
    </>
  );
}
