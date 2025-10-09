import GalleryHeader from "../GalleryPage/GalleryHeader"
import { assets } from "../../../public/images/assets"
import StorySec from "./StorySec";
import DateSec from '../DateSec';
export default function Information() {
    const header = "This house, and this village,have been a "
    const parag = "part of our lives for generations";
  return (
    <div>
        <GalleryHeader bg={assets.nighberhood2} title={'Information'} header={header} parag={parag}/>
        <StorySec/>
        <DateSec bg={assets.seaView1}/>
    </div>
  )
}

