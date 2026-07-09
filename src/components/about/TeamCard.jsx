import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";

const TeamCard = ({ member }) => {
    return (
        <Card className="rounded-0 border-0 shadow-none">
            <img
                src={member.image}
                alt={member.name}
                className="h-[30vh] w-full object-cover"
            />

            <CardBody className="flex flex-col items-center px-0 py-6">
                <CardTitle className="mb-2 font-montserrat text-base font-bold text-[#252B42]">
                    {member.name}
                </CardTitle>

                <CardSubtitle className="font-montserrat text-sm text-[#737373]">
                    {member.company}
                </CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default TeamCard;