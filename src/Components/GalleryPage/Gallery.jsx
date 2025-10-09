import ExteriorViews from "./ExteriorViews";
import GalleryHeader from "./GalleryHeader";
import InteriorViews from "./InteriorViews";
import Neighborhood from "./Neighborhood";
import DateSec from '../DateSec';
import { assets } from "../../../public/images/assets";
export default function Gallery() {
  const header = "Experience Shore Guesthouse.";
  const parag = "Explore our gallery and start planning."
  return (
    <div>
      <GalleryHeader bg={assets.house} title={'Gallery'} header={header} parag={parag}/>
      <ExteriorViews/>
      <InteriorViews/>
      <Neighborhood/>
      <DateSec bg={assets.house}/>
    </div>
  )
}
