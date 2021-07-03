import { FC } from "react";
import Link from "next/link";
const HeaderNav: FC = () => {
  return (
    <nav className="ml-auto text-white text-base">
      <ul className="flex">
        <li className="px-7">
          <Link href="/">
            <a className="hover:text-secondary transition-all">About</a>
          </Link>
        </li>
        <li className="px-7">
          <Link href="/">
            <a className="hover:text-secondary transition-all">Tokenomics</a>
          </Link>
        </li>
        <li className="px-7">
          <Link href="/">
            <a className="hover:text-secondary transition-all">Charts</a>
          </Link>
        </li>
        <li className="px-7">
          <Link href="/">
            <a className="hover:text-secondary transition-all">Documentation</a>
          </Link>
        </li>
        <li className="px-7">
          <Link href="/">
            <a className="hover:text-secondary transition-all">FAQ</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
