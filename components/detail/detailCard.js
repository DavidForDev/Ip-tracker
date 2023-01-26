const DetailCard = ({ name, value }) => {
  return (
    <div className="flex flex-col gap-2 p-2 lg:p-6 w-full text-center lg:text-start">
      <h5 className="text-[#969696] uppercase font-semibold text-xs lg:text-sm">
        {name}
      </h5>
      <p className="text-[#2B2B2B] text-xl lg:text-2xl font-bold">{value}</p>
    </div>
  );
};

export default DetailCard;
