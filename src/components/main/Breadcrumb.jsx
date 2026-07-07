import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);

    return (
        <div className="flex items-center gap-2 font-montserrat text-sm font-bold">
            <span className="text-[#252B42]">
                Home
            </span>

            {paths.map((path) => (
                <div key={path} className="flex items-center gap-2">
                    <ChevronRight className="size-4 text-[#BDBDBD]" />

                    <span className="capitalize text-[#BDBDBD]">
                        {path}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Breadcrumbs;