import { FaPhoneAlt, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const TopBar = () => {
    return (
        <div className="bg-[#252B42] text-white">
            <div className="mx-auto flex h-12 max-w-[1200px] items-center justify-between px-4 text-sm font-semibold">

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt size={12} />
                        <span>(225) 555-0118</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MdEmail size={16} />
                        <span>michelle.rivera@example.com</span>
                    </div>
                </div>

                <p className="hidden md:block">
                    Follow us and get a chance to win 80% off
                </p>

                <div className="flex items-center gap-3">
                    <span className="hidden sm:inline">Follow Us :</span>
                    <FaInstagram />
                    <FaYoutube />
                    <FaFacebook />
                    <FaTwitter />
                </div>

            </div>
        </div>
    );
};
