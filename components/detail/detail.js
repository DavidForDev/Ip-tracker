// ========== Components ========== \\
import DetailCard from "./detailCard";

const IpDetail = ({ data }) => {
  return (
    <div className="p-4 drop-shadow-xl bg-white rounded-xl w-full m-auto z-10 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
      <DetailCard name="ip address" value={data.ip ? data.ip : "not Founded"} />
      <DetailCard
        name="location"
        value={`${data.country_name ? data.country_name : "not Founded"}, ${
          data.city ? data.city : ""
        }`}
      />
      <DetailCard
        name="timezone"
        value={`UTC ${
          data.time_zone?.abbr ? data.time_zone?.abbr : "not Founded"
        }`}
      />
      <DetailCard
        name="isp"
        value={data.asn?.name ? data.asn?.name : "not Founded"}
      />
    </div>
  );
};

export default IpDetail;
