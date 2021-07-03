import { FC } from "react";
import Link from "next/link";
const SwapButton: FC = () => {
  return (
    <Link href="/">
      <a className="ml-8 rounded-3xl font-bold bg-gradient-to-r from-secondary to-white text-white h-14 flex items-center px-7">
        Buy Token
      </a>
    </Link>
  );
};

export default SwapButton;
