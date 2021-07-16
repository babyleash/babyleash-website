import ComingSoon from "@components/ComingSoon";
import PageHeader from "@components/header/PageHeader";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baby Leash token</title>
      </Head>
      <PageHeader />
      <ComingSoon />
    </>
  );
}
