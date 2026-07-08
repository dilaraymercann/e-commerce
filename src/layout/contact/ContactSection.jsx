import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section className="font-montserrat">
            <div className="mx-auto min-h-screen flex flex-col gap-4 items-center justify-center text-center max-w-[40vw]">
                <h1 className="font-bold! leading-tight text-[#252B42]">
                    Get answers to all your questions.
                </h1>

                <p className="mt-6 text-md leading-6 text-[#737373]">
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics:
                </p>

                <button className="mt-8 rounded bg-[#23A6F0] px-10 py-3 text-sm font-bold text-white">
                    CONTACT OUR COMPANY
                </button>

                <div className="mt-8 flex items-center gap-6 text-[#BDBDBD]">
                    <FaTwitter size={24} />
                    <FaFacebookSquare size={24} />
                    <FaInstagram size={24} />
                    <FaLinkedin size={24} />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;