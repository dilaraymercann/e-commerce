import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const footerLinks = [
    {
        title: "Company Info",
        links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
        title: "Legal",
        links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
        title: "Features",
        links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
    },
    {
        title: "Resources",
        links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
];

const Footer = () => {
    return (
        <footer className="bg-white font-montserrat">
            <div className="border-b border-[#E6E6E6] bg-[#FAFAFA]">
                <div className="mx-auto flex max-w-[70vw] items-center justify-between px-4 py-10">
                    <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>

                    <div className="flex gap-5 text-[#23A6F0]">
                        <FaFacebook size={22} />
                        <FaInstagram size={22} />
                        <FaTwitter size={22} />
                    </div>
                </div>
            </div>

            <div className="mx-auto grid max-w-[70vw] grid-cols-1 gap-10 px-4 py-14 md:grid-cols-5">
                {footerLinks.map((section) => (
                    <div key={section.title}>
                        <h6 className="mb-5 text-sm font-bold text-[#252B42]">
                            {section.title}
                        </h6>

                        <ul className="m-0 list-none space-y-3 p-0">
                            {section.links.map((link) => (
                                <li
                                    key={link}
                                    className="cursor-pointer text-sm font-bold text-[#737373] hover:text-[#23A6F0]"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h6 className="mb-5 text-sm font-bold text-[#252B42]">
                        Get In Touch
                    </h6>

                    <div className="flex w-[20vw] overflow-hidden rounded border border-[#E6E6E6]">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-[12vw] px-4 py-3 text-sm outline-none"
                        />

                        <button className="w-full bg-[#23A6F0] text-sm text-white">
                            Subscribe
                        </button>
                    </div>

                    <p className="mt-3 text-xs text-[#737373]">
                        Lore imp sum dolor Amit
                    </p>
                </div>
            </div>

            <div className="bg-[#FAFAFA]">
                <div className="mx-auto max-w-[70vw] px-4 py-6">
                    <p className="text-sm font-bold text-[#737373]">
                        Made With Love By Finland All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;