import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";
import { Clock3, BarChart3, ChevronRight } from "lucide-react";

const FeaturedPostCard = ({ post }) => {
    return (
        <Card className="overflow-hidden rounded-none border border-[#E6E6E6] shadow-none">
            <div className="relative">
                <img
                    src={post.image}
                    alt={post.title}
                    className="h-[50vh] w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                <span className="absolute left-5 top-5 rounded bg-[#E74040] px-3 py-1 text-sm font-bold text-white">
                    NEW
                </span>
            </div>

            <CardBody className="flex flex-col gap-4 p-6 font-montserrat">

                <div className="flex gap-4 text-xs">
                    <span className="text-[#8EC2F2]">Google</span>
                    <span className="text-[#737373]">Trending</span>
                    <span className="text-[#737373]">New</span>
                </div>

                <CardTitle className="text-xl font-normal leading-8 text-[#252B42]">
                    {post.title}
                </CardTitle>

                <CardText className="text-sm leading-6 text-[#737373]">
                    {post.description}
                </CardText>

                <div className="flex justify-between text-xs text-[#737373]">

                    <div className="flex items-center gap-2">
                        <Clock3 size={14} className="text-[#23A6F0]" />
                        <span>{post.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <BarChart3 size={14} className="text-[#23856D]" />
                        <span>{post.comments}</span>
                    </div>

                </div>

                <button className="mt-2 flex items-center gap-2 p-0 text-sm font-bold text-[#737373] transition hover:text-[#23A6F0]">
                    Learn More
                    <ChevronRight size={18} className="text-[#23A6F0]" />
                </button>

            </CardBody>
        </Card>
    );
};

export default FeaturedPostCard;