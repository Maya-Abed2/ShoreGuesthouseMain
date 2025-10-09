import Navbar from "./Navbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ClearIcon from '@mui/icons-material/Clear';
export default function Footer() {
  return (
    <div className=" bg-black">
      <div className="container mx-auto px-4 pt-14  text-white">
        <div className="mb-6">
          <h5 className="mb-6">Shore Guesthouse</h5>
          <hr className=" w-[5%] my-3" />
          <p className="my-4">&copy; 2025 All Rights Reserved</p>
          <p>tmaya5833@gmail.com</p>
        </div>
            <hr className=" mt-40 sm:mt-0"/>
        <div className="flex items-center space-x-3 py-4">
            <FacebookIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
            <ClearIcon/>
        </div>
      </div>
    </div>
  );
}
