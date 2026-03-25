import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <Link href={"/favorites"}> favorites</Link>
      <Link href={"/albums"}></Link>
    </div>
  );
};
