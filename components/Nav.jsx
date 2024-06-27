import Link from "next/link";

import SearchBar from "@/components/SearchBar";

const Nav = () => {
  return (
    <nav className="border">
      <div className="wrapper flex flex-col items-center justify-between py-2 lg:flex-row">
        <Link href="/" className="pb-2">
          Block Explorer
        </Link>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Nav;
