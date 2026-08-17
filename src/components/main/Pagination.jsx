import {
    Button,
    ButtonGroup,
} from "reactstrap";

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const pages = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <ButtonGroup>
            <Button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="!border-[#BDBDBD] !bg-white !px-5 !py-3 !text-[#23A6F0]"
            >
                Previous
            </Button>

            {pages.map((page) => (
                <Button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={
                        currentPage === page
                            ? "!border-[#23A6F0] !bg-[#23A6F0] !px-5 !py-3 !text-white"
                            : "!border-[#BDBDBD] !bg-white !px-5 !py-3 !text-[#23A6F0]"
                    }
                >
                    {page}
                </Button>
            ))}

            <Button
                disabled={
                    currentPage === totalPages ||
                    totalPages === 0
                }
                onClick={() => onPageChange(currentPage + 1)}
                className="!border-[#BDBDBD] !bg-white !px-5 !py-3 !text-[#23A6F0]"
            >
                Next
            </Button>
        </ButtonGroup>
    );
};

export default Pagination;