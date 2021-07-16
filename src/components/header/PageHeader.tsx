import { FC } from "react";
import Link from "next/link";
import Container from "@components/layout/Container";
import HeaderNav from "./HeaderNav";
import SwapButton from "./SwapButton";

const PageHeader: FC = () => {
  return (
    <Container className="py-10 flex items-center mb-7">
      <div className="site-logo mr-auto">
        <Link href="/">
          <a className="text-3xl font-black text-white">babyLEASH</a>
        </Link>
      </div>

      {/* <HeaderNav /> */}
      <SwapButton />
    </Container>
  );
};

export default PageHeader;
