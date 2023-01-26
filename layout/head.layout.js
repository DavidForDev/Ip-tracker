import Head from "next/head";

const HeadLayout = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="Ip tracker" content="Ip tracker" />
    </Head>
  );
};

export default HeadLayout;
