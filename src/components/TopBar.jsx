import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const TopBar = () => {
    return (
        <div className="bg-[#252B42] text-white flex justify-between items-center font-montserrat text-xs px-4 py-2">
            <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                    <BsTelephone size={15} />
                    <span>(255) 555-0118</span>
                </div>
                <div className="flex gap-1 items-center">
                    <MdOutlineEmail size={18} />
                    <span>michelle.rivera@example.com</span>
                </div>
            </div>
            <div>
                <span>Follow Us and get a chance to win 80% off</span>
            </div>
            <div className="flex gap-2 items-center">
                <span>Follow Us :</span>
                <FaInstagram size={16} />
                <FaYoutube size={16} />
                <FaFacebook size={16} />
                <FaTwitter size={16} />
            </div>
        </div>
    );
};

export default TopBar;
