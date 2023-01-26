import { useState } from "react";
import requestIp from "request-ip";

// ========== Layouts =========== \\
import HeadLayout from "../layout/head.layout";

// ========== Components =========== \\
import Map from "../components/map";
import IpDetail from "../components/detail/detail";

// ========== UIElement =========== \\
import RightArrow from "../public/icons/rightArrow.js";

// ========== UIElement =========== \\
import { PrimaryInput, PrimaryButton } from "../UIElements/elements";

export default function Home({ data }) {
  const [ipData, setIpData] = useState(data);
  const [Ip, setIp] = useState("");

  const getData = async (Ip) => {
    if (Ip === "") return alert("please Fill field!");

    const fetcher = await fetch(
      `https://api.ipdata.co/${Ip}?api-key=c61de06ea8b66b93725d151e7d39ca9b7bf84847f35c41095baffc3a`
    );
    const response = await fetcher.json();

    return setIpData(response);
  };

  return (
    <>
      <HeadLayout title="Ip Tracker" />
      <div className="h-full w-full flex flex-col">
        <div className="relative h-72 p-8 w-full z-40 bg-[url('/background.jpg')] bg-no-repeat bg-cover flex-grow-0 flex-shrink basis-auto flex gap-6 items-center flex-col">
          <div className="flex flex-col w-full lg:w-5/6 gap-1 lg:gap-7 justify-center items-center">
            <h3 className="font-bold text-2xl lg:text-3xl text-white pb-2 text-center">
              IP Address Tracker
            </h3>
            <div className="flex w-full lg:w-2/3 m-auto pb-4">
              <PrimaryInput
                type="text"
                placeholder="Search for any IP Address"
                onChange={(e) => setIp(e.target.value)}
              />
              <PrimaryButton type="button" onClick={() => getData(Ip)}>
                <RightArrow />
              </PrimaryButton>
            </div>
            <IpDetail data={ipData} />
          </div>
        </div>
        <Map data={ipData} style={{ width: "100%", border: "none" }} />
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const getGuestIp = requestIp.getClientIp(req);

  console.log(getGuestIp);

  const fetcher = await fetch(
    `https://api.ipdata.co/5.152.26.237?api-key=c61de06ea8b66b93725d151e7d39ca9b7bf84847f35c41095baffc3a`
  );

  const response = await fetcher.json();

  return {
    props: {
      data: response,
    },
  };
}