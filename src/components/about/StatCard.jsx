const StatCard = ({ value, label }) => {
    return (
        <div className="text-center">
            <h2 className="mb-2 text-6xl font-bold! text-[#252B42]">
                {value}
            </h2>

            <p className="text-base font-bold text-[#737373]">
                {label}
            </p>
        </div>
    );
};

export default StatCard;