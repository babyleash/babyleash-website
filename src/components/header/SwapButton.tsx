import { FC } from "react";
import Link from "next/link";
const SwapButton: FC = () => {
  return (
    <Link href="/">
      <a className="ml-8 select-none opacity-50 cursor-not-allowed rounded-3xl font-bold bg-gradient-to-r from-secondary-dark to-secondary text-white h-12 flex items-center px-7">
        Buy Token (Coming Soon)
      </a>
    </Link>
  );
};

export default SwapButton;
