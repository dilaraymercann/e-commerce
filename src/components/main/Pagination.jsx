import { Button, ButtonGroup } from "reactstrap";

const Pagination = () => {
    return (
        <div className="mt-16 flex justify-center">
            <ButtonGroup>
                <Button
                    disabled
                    className="!rounded-l-md !border-[#BDBDBD] !bg-[#F3F3F3] !px-6 !py-4 !text-sm !text-[#BDBDBD]"
                >
                    First
                </Button>

                <Button
                    className="!border-[#BDBDBD] !bg-white !px-5 !py-4 !text-sm !text-[#23A6F0]"
                >
                    1
                </Button>

                <Button
                    active
                    className="!border-[#BDBDBD] !bg-[#23A6F0] !px-5 !py-4 !text-sm !text-white"
                >
                    2
                </Button>

                <Button
                    className="!border-[#BDBDBD] !bg-white !px-5 !py-4 !text-sm !text-[#23A6F0]"
                >
                    3
                </Button>

                <Button
                    className="!rounded-r-md !border-[#BDBDBD] !bg-white !px-6 !py-4 !text-sm !font-bold !text-[#23A6F0]"
                >
                    Next
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Pagination;