import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default function BoxTopNav() {
  return (
    <>
      <div className="text-center py-3 small" style={{backgroundColor:"#2a6f97"}}>
        
        <span className="text-white me-4 d-inline-flex align-items-center gap-2">
            <FaPhoneSquareAlt /> 038-723460
        </span>
        <span className="text-white d-inline-flex align-items-center gap-2">
           <MdOutlineMailOutline /> Contact@DentalSmilePattaya.com
        </span>
      </div>
    </>
  );
}
