import { FC } from "react";
import Link from "next/link";
const HeaderNav: FC = () => {
  return (
    <nav className="ml-auto">
      <ul className="flex">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
